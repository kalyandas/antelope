import { Component } from '@angular/core';
import { MultiSeriesChartBaseComponent } from '../multi-series-chart-base.component';

@Component({
  selector: 'nt-line-chart',
  templateUrl: './nt-line-chart.component.html',
  styleUrls: ['./nt-line-chart.component.css']
})
export class NtLineChartComponent extends MultiSeriesChartBaseComponent  {
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = '';
  yAxisLabel: string = '';
  timeline: boolean = true;


  override ngOnInit(): void {
    super.ngOnInit();
    this.xAxisLabel = this.display.xAxisLabel ? this.display.xAxisLabel : 'Undefined';
    this.yAxisLabel = this.display.yAxisLabel ? this.display.yAxisLabel : 'Undefined';
  }
}
