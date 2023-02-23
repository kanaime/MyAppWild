import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexPageComponentComponent } from './pokedex-page-component.component';

describe('PokedexPageComponentComponent', () => {
  let component: PokedexPageComponentComponent;
  let fixture: ComponentFixture<PokedexPageComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedexPageComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokedexPageComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
