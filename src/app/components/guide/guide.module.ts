import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NeatScrollspyModule } from 'ngx-neatscrollspy';

import { SampleComponent } from './sample/sample.component';
import { InstallationComponent } from './installation/installation.component';
import { SetupComponent } from './setup/setup.component';
import { MultipleComponent } from './multiple/multiple.component';
import { StylingComponent } from './styling/styling.component';
import { AlignmentComponent } from './alignment/alignment.component';
import { GuideRoutes } from './guide.routing';

@NgModule({
  declarations: [SampleComponent, InstallationComponent, SetupComponent, MultipleComponent, StylingComponent, AlignmentComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(GuideRoutes),
    NeatScrollspyModule
  ]
})
export class GuideModule { }
