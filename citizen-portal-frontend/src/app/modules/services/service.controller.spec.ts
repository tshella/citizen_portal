import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServiceController } from './service.controller';

describe('ServiceController', () => {
  let component: ServiceController;
  let fixture: ComponentFixture<ServiceController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceController]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});