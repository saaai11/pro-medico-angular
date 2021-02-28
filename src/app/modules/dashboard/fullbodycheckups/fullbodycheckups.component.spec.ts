import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullbodycheckupsComponent } from './fullbodycheckups.component';

describe('FullbodycheckupsComponent', () => {
  let component: FullbodycheckupsComponent;
  let fixture: ComponentFixture<FullbodycheckupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullbodycheckupsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullbodycheckupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
