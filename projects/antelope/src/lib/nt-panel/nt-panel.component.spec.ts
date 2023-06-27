import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NtPanelComponent } from './nt-panel.component';

describe('NtPanelComponent', () => {
  let component: NtPanelComponent;
  let fixture: ComponentFixture<NtPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NtPanelComponent]
    });
    fixture = TestBed.createComponent(NtPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
