import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  standalone: false,
  templateUrl: './recipe-form.component.html',
  styleUrl: './recipe-form.component.css'
})
export class RecipeFormComponent implements OnInit, OnChanges {
  @Input() initialData: any = null;
  @Output() formSubmit = new EventEmitter<any>()

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      name: [this.initialData?.name || "", Validators.required],
      description: [this.initialData?.description || "", Validators.required],
      imagePath: [this.initialData?.imagePath || "", Validators.required],
      ingredients: this.fb.array([]),
    })
  
    if (this.initialData?.ingredients) {
      this.initialData.ingredients.forEach((ingredient: any) => {
        this.addIngredient(ingredient)
      });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["initialData"] && this.initialData) {
      this.form.patchValue({
        name: this.initialData.name || "",
        description: this.initialData.description || "",
        imagePath: this.initialData.imagePath || "",
      })

      const ingredientsFG = this.initialData.ingredients.map((ing: any) =>
        this.fb.group({
          name: [ing.name, Validators.required],
          amount: [ing.amount, [Validators.required, Validators.min(1)]]
        })
      )

      this.form.setControl("ingredients", this.fb.array(ingredientsFG));
    }
  }

  get ingredients(): FormArray {
    return this.form.get("ingredients") as FormArray;
  }

  addIngredient(ing: any = {name: "", amount: 0}) {
    this.ingredients.push(
      this.fb.group({
        name: [ing.name, Validators.required],
        amount: [ing.amount, [Validators.required, Validators.min(1)]]
      })
    )
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index)
  }

  onSubmit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value)
    }
  }
}
