import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentController } from './payment.controller';

describe('PaymentController', () => {
  let component: PaymentController;
  let fixture: ComponentFixture<PaymentController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaymentController]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});