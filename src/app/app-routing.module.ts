import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicthemeComponent } from './layout/basictheme/basictheme.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'basic/installation' },
  {
    path: '',
    component: BasicthemeComponent,
    children: [
      {
        path: 'basic',
        loadChildren: './components/guide/guide.module#GuideModule'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
