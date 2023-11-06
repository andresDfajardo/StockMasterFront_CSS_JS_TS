import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributomultivariadoComponent } from './atributomultivariado.component';

describe('AtributomultivariadoComponent', () => {
  let component: AtributomultivariadoComponent;
  let fixture: ComponentFixture<AtributomultivariadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributomultivariadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributomultivariadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
