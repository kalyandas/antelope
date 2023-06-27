import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NtEventEmitter, EventSubcription, Model, NtEvent, Display } from './types/types';
import { NtService } from './nt.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'nt-base',
  template: `
    <p>
      base works!
    </p>
  `,
  styles: [
  ]
})
export class BaseComponent implements OnInit {
    @Input()
    api!: string;
    @Input()
    model!: Model[];
    @Input()
    eventEmitters!: NtEventEmitter[];
    @Input()
    eventSubscriptions!: EventSubcription[];
    @Input()
    display!: Display;

    data!: any;
    @Output()
    loading = new EventEmitter<boolean>();

    apiParams = '';

  constructor(public service: NtService, 
    public message: NzMessageService) { }

  ngOnInit(): void {
    if(this.eventSubscriptions && this.eventSubscriptions.length > 0 ) {
      this.service.filtersEmitter.subscribe(fs => {
        const fsFiltered = fs.filter(f => this.eventSubscriptions.map(e => e.name).includes(f.name));
        if(fsFiltered && fsFiltered.length > 0) {
          let apiParams = '';
          fsFiltered.forEach((f, i) => {
            if(i > 0) {
              apiParams += '&';
            } else {
              apiParams += '?';
            }
            apiParams += this.eventSubscriptions.find(ev => ev.name === f.name)?.apiParameter +'='+ f.value;
          });
          if(this.apiParams !== apiParams) {
            this.apiParams = apiParams;
            this.loadData(apiParams);
          }
        } else {
          this.data = null;
          this.loading.emit(false);
        }
      });
      
    } else {
      this.loadData();
    }

    
  }
  
  loadData(apiParams = '') {
    this.loading.emit(true);
    this.service.getData(this.api + apiParams)
    .subscribe({next: (ds) => {
      this.data = ds;
      this.loading.emit(false);
    }, error: (err) => {
      this.message.error('Error loading data');
      this.loading.emit(false);
    }
  });
  }

  emit(source: string, data: any) {
    const em = this.eventEmitters.find(e => e.source === source);
    if(em) {
      this.service.emitter.emit({ 
        name: em.name, 
        value: data[em.value],
        label: em.label,
        labelValue: data[em.source] 
      });
    }
  }

  isEmitable(source: string) {
    return this.eventEmitters && this.eventEmitters.findIndex(e => e.source === source) > -1;
  }

}