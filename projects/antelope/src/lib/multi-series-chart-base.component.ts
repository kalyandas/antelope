import { Component } from '@angular/core';
import { BaseComponent } from './base.component';

@Component({
  selector: 'nt-single-series-chart-base',
  template: `
    <p>
    multi-series-chart-base works!
    </p>
  `,
  styles: [
  ]
})
export class MultiSeriesChartBaseComponent extends BaseComponent {
  results: any[] = [];
  
  override ngOnInit(): void {
    super.ngOnInit();
    this.loading.subscribe(v => {
      if (!v) {
        this.results = [];
        if(this.display.nameProperty && this.display.valueProperty) {
          const rs: any[] = [];
          (this.data as any[]).sort((d1, d2) => d1.id - d2.id).forEach(d => {
            if(this.display.nameProperty && this.display.valueProperty) {
              let  k = rs.find(m => m.name === d[this.display.nameProperty ? this.display.nameProperty : '']);
              if(!k) {
                k = {
                  name: d[this.display.nameProperty ? this.display.nameProperty : ''],
                  series: []
                };
                rs.push(k);
              }
              k.series.push({
                name: d['year'],
                value: d['count'],
                extra: {
                  ...d
                }
              });
            }
          });
          this.results = rs;
          console.log('results ===>', this.results);
        } else {
          this.message.error('nameProperty and/or valueProperty not set');  
        }
      }
    });

  }

  onSelect(event: any) {
    console.log('event ===>', event);
    if(this.filterEmitters) {
      this.filterEmitters.forEach(em => {
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