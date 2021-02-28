import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorsloginComponent } from './doctorslogin.component';

describe('DoctorsloginComponent', () => {
  let component: DoctorsloginComponent;
  let fixture: ComponentFixture<DoctorsloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorsloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorsloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
