import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterEmitter, FilterSubcription, Model, NtEvent, Display } from './types/types';
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
    filterEmitters!: FilterEmitter[];
    @Input()
    filterSubscriptions!: FilterSubcription[];
    @Input()
    display!: Display;

    data!: any;
    @Output()
    loading = new EventEmitter<boolean>();

    apiParams = '';

  constructor(public service: NtService, 
    public message: NzMessageService) { }

  ngOnInit(): void {
    if(this.filterSubscriptions && this.filterSubscriptions.length > 0 ) {
      this.service.filtersEmitter.subscribe(fs => {
        const reqFilters = this.filterSubscriptions.filter(e => e.required).map(e => e.name);
        if(reqFilters.every(e => fs.map(f => f.name).includes(e))) {
          const fsFiltered = fs.filter(f => this.filterSubscriptions.map(e => e.name).includes(f.name));
          if(fsFiltered && fsFiltered.length > 0) {
            let apiParams = '';
            fsFiltered.forEach((f, i) => {
              if(i > 0) {
                apiParams += '&';
              } else {
                apiParams += '?';
              }
              apiParams += this.filterSubscriptions.find(ev => ev.name === f.name)?.apiParameter +'='+ f.value;
            });
            if(this.apiParams !== apiParams) {
              this.apiParams = apiParams;
              this.loadData(apiParams);
            }
          } else {
            this.data = null;
            this.loading.emit(false);
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
    const em = this.filterEmitters.find(e => e.source === source);
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
    return this.filterEmitters && this.filterEmitters.findIndex(e => e.source === source) > -1;
  }

}