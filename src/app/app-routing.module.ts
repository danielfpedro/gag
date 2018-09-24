import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'feed',
    loadChildren: './feed/feed.module#FeedModule'
  },
  {
    path: 'memes',
    loadChildren: './memes/memes.module#MemesModule'
  },
  {
    path: 'entrar',
    loadChildren: './login/login.module#LoginModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
