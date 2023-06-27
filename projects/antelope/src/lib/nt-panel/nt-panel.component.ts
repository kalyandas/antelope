import { Component, Input, OnInit } from '@angular/core';
import { NtEvent, Panel } from '../types/types';

@Component({
  selector: 'nt-panel',
  templateUrl: './nt-panel.component.html',
  styleUrls: ['./nt-panel.component.css']
})
export class NtPanelComponent implements OnInit {
  @Input()
  metadata!: Panel;
  @Input()
  filters!: NtEvent[];

  loading = false;

  ngOnInit(): void {

  }

  onLoading(ev: boolean) {
    this.loading = ev;
  }

}
