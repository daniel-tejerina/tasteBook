import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecipePageComponent } from './update-recipe-page.component';

describe('UpdateRecipePageComponent', () => {
  let component: UpdateRecipePageComponent;
  let fixture: ComponentFixture<UpdateRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateRecipePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
