import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedRoutingModule } from './feed-routing.module';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,

    // Material
    MatButtonModule,
    MatCardModule
  ],
  declarations: [HomeComponent]
})
export class FeedModule { }
