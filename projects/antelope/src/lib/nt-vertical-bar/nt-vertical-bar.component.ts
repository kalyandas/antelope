import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { SingleSeriesChartBaseComponent } from '../single-series-chart-base.component';

@Component({
  selector: 'nt-vertical-bar',
  templateUrl: './nt-vertical-bar.component.html',
  styleUrls: ['./nt-vertical-bar.component.css']
})
export class NtVerticalBarComponent extends SingleSeriesChartBaseComponent {
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Undefined';
  showYAxisLabel = true;
  yAxisLabel = 'Undefined';


  override ngOnInit(): void {
    super.ngOnInit();
    this.xAxisLabel = this.display.xAxisLabel ? this.display.xAxisLabel : 'Undefined';
    this.yAxisLabel = this.display.yAxisLabel ? this.display.yAxisLabel : 'Undefined';
  }

}
