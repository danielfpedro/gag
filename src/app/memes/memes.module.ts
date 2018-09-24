import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemesRoutingModule } from './memes-routing.module';
import { MemesAddComponent } from './memes-add/memes-add.component';

@NgModule({
  imports: [
    CommonModule,
    MemesRoutingModule
  ],
  declarations: [MemesAddComponent]
})
export class MemesModule { }
