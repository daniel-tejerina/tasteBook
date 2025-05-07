import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadRecipePageComponent } from './read-recipe-page.component';

describe('ReadRecipePageComponent', () => {
  let component: ReadRecipePageComponent;
  let fixture: ComponentFixture<ReadRecipePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReadRecipePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReadRecipePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
