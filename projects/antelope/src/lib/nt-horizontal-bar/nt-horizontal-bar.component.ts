import { Component } from '@angular/core';
import { BaseComponent } from '../base.component';
import { SingleSeriesChartBaseComponent } from '../single-series-chart-base.component';

@Component({
  selector: 'nt-horizontal-bar',
  templateUrl: './nt-horizontal-bar.component.html',
  styleUrls: ['./nt-horizontal-bar.component.css']
})
export class NtHorizontalBarComponent extends SingleSeriesChartBaseComponent {
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
