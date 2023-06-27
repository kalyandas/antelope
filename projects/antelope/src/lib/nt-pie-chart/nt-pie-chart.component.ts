import { Component } from '@angular/core';
import { LegendPosition } from '@swimlane/ngx-charts';
import { SingleSeriesChartBaseComponent } from '../single-series-chart-base.component';

@Component({
  selector: 'nt-pie-chart',
  templateUrl: './nt-pie-chart.component.html',
  styleUrls: ['./nt-pie-chart.component.css']
})
export class NtPieChartComponent extends SingleSeriesChartBaseComponent  {
  // options
  gradient = false;
  showLegend = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: LegendPosition = LegendPosition.Right;


  override ngOnInit(): void {
    super.ngOnInit();
    if(this.display.doughnut) {
      this.isDoughnut = this.display.doughnut;
    }
  }
}
