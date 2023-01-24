import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturamenorComponent } from './facturamenor.component';

describe('FacturamenorComponent', () => {
  let component: FacturamenorComponent;
  let fixture: ComponentFixture<FacturamenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturamenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturamenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
