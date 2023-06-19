import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjecListingComponent } from './projec-listing.component';

describe('ProjecListingComponent', () => {
  let component: ProjecListingComponent;
  let fixture: ComponentFixture<ProjecListingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjecListingComponent]
    });
    fixture = TestBed.createComponent(ProjecListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
