import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngagelyComponent } from './engagely.component';

describe('EngagelyComponent', () => {
  let component: EngagelyComponent;
  let fixture: ComponentFixture<EngagelyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngagelyComponent]
    });
    fixture = TestBed.createComponent(EngagelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
