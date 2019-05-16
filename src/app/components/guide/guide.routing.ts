import { Routes } from '@angular/router';

import { SampleComponent } from './sample/sample.component';
import { InstallationComponent } from './installation/installation.component';
import { SetupComponent } from './setup/setup.component';
import { MultipleComponent } from './multiple/multiple.component';
import { StylingComponent } from './styling/styling.component';
import { AlignmentComponent } from './alignment/alignment.component';

export const GuideRoutes: Routes = [
    {
        path: 'sample',
        component: SampleComponent,
    },
    {
        path: 'installation',
        component: InstallationComponent,
    },
    {
        path: 'setup',
        component: SetupComponent,
    },
    {
        path: 'multiple',
        component: MultipleComponent,
    },
    {
        path: 'styling',
        component: StylingComponent,
    },
    {
        path: 'alignment',
        component: AlignmentComponent,
    },
];