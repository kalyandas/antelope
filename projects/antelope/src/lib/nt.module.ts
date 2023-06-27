import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NtDashboardComponent } from './nt-dashboard/nt-dashboard.component';
import { NtPanelComponent } from './nt-panel/nt-panel.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NtTableComponent } from './nt-table/nt-table.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NtVerticalBarComponent } from './nt-vertical-bar/nt-vertical-bar.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NtHorizontalBarComponent } from './nt-horizontal-bar/nt-horizontal-bar.component';
import { NtPieChartComponent } from './nt-pie-chart/nt-pie-chart.component';
import { NtLineChartComponent } from './nt-line-chart/nt-line-chart.component';

@NgModule({
  declarations: [
    NtDashboardComponent,
    NtPanelComponent,
    NtTableComponent,
    NtVerticalBarComponent,
    NtHorizontalBarComponent,
    NtPieChartComponent,
    NtLineChartComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzPageHeaderModule,
    NzTableModule,
    NzInputModule,
    NzIconModule,
    NzFormModule,
    NzMessageModule,
    NgxChartsModule,
    BrowserAnimationsModule
  ],
  exports: [
    NtDashboardComponent
  ]
})
export class AntelopeModule { }
