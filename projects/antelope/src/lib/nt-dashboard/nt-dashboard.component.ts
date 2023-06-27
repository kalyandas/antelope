import { Component, Input } from '@angular/core';
import { NtService } from '../nt.service';
import { Dashboard, NtEvent, Panel } from '../types/types';

@Component({
  selector: 'nt-dashboard',
  templateUrl: './nt-dashboard.component.html',
  styleUrls: ['./nt-dashboard.component.css']
})
export class NtDashboardComponent {
  metadata!: Dashboard;
  panelsMetadata: [Panel[]] = [[]];

  filters: NtEvent[] = [];

  constructor(private service: NtService) {
    service.emitter.subscribe(e => {
      const fIn = this.filters.findIndex(ev => ev.name === e.name);
      let filterChanged = true;
      if(fIn > -1) {
        if(!!this.filters[fIn].value) {
          if(this.filters[fIn].value !== e.value) {
            this.filters[fIn] = e;
          } else {
            filterChanged = false;
          }         
        } else {
          this.filters.splice(fIn, 1);
        }
      } else {
        this.filters.push(e);
      }
      if(filterChanged) {
        service.filtersEmitter.emit(this.filters);
      }
    });
  }

  @Input("id")
  set id(id: number) {
    if(!id) throw "Antelope cannot run";
    this.service.getMetadata(id).subscribe(ds => {
      this.metadata = ds;
      const panels = ds.panels.sort((p1, p2) => p1.display.position.row - p2.display.position.row);
      let row: Panel[] = [];
      let rI = 0;
      panels.forEach(p => {
        if(rI !== p.display.position.row) {
          if(row.length > 0) {
            this.panelsMetadata.push(row);
          }
          row = [];
          rI = p.display.position.row;
        }
        row.push(p);
      });
      if(row.length > 0) {
        this.panelsMetadata.push(row);
      }
    });
    this.panelsMetadata.pop();
  }

  onClearFilter(f: NtEvent) {
    f.value = '';
    this.service.emitter.emit(f);
  }
}
