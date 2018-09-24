import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemesAddComponent } from './memes-add/memes-add.component';

const routes: Routes = [
  {
    path: '',
    component: MemesAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemesRoutingModule { }
