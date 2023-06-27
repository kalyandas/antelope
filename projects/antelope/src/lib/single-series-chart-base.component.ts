import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NtEventEmitter, EventSubcription, Model, NtEvent, Display } from './types/types';
import { NtService } from './nt.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { BaseComponent } from './base.component';

@Component({
  selector: 'nt-single-series-chart-base',
  template: `
    <p>
    single-series-chart-base works!
    </p>
  `,
  styles: [
  ]
})
export class SingleSeriesChartBaseComponent extends BaseComponent {
  results: any[] = [];
  
  override ngOnInit(): void {
    super.ngOnInit();
    this.loading.subscribe(v => {
      if (!v) {
        this.results = [];
        (this.data as any[]).forEach(d => {
          if(this.display.nameProperty && this.display.valueProperty) {
            this.results.push({
              name: d[this.display.nameProperty],
              value: d[this.display.valueProperty],
              extra: {
                ...d
              }
            });
          } else {
            this.message.error('nameProperty and/or valueProperty not set');
          }
        });
      }
    });

  }

  onSelect(event: any) {
    if(this.eventEmitters) {
      this.eventEmitters.forEach(em => {
        if(event.extra[em.source]) {
          this.service.emitter.emit({ 
            name: em.name, 
            value: event.extra[em.value],
            label: em.label,
            labelValue:  event.extra[em.source] 
          });
        }
      });
    }
  }

}