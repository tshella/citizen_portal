import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ApplicationController } from './application.controller';
import { ApplicationService } from './application.service';
import { NotificationService } from '../../../core/services/notification.service';

describe('ApplicationController', () => {
  let component: ApplicationController;
  let fixture: ComponentFixture<ApplicationController>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ApplicationController],
      providers: [
        { provide: ApplicationService, useValue: {} },
        { provide: NotificationService, useValue: {} }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationController);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});