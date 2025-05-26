import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AdminController } from './admin.controller';

describe('AdminController', () => {
  let component: AdminController;
  let fixture: ComponentFixture<AdminController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AdminController]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});