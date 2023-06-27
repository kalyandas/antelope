import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtTableComponent } from './nt-table.component';

describe('NtTableComponent', () => {
  let component: NtTableComponent;
  let fixture: ComponentFixture<NtTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtTableComponent]
    });
    fixture = TestBed.createComponent(NtTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
