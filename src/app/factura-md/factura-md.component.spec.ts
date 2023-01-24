import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaMDComponent } from './factura-md.component';

describe('FacturaMDComponent', () => {
  let component: FacturaMDComponent;
  let fixture: ComponentFixture<FacturaMDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturaMDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaMDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
