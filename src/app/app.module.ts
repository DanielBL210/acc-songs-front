import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ListSongsComponent } from './components/list-songs/list-songs.component';

//import routes
import { ROUTES } from './app.routes';
import { NoimagePipe } from './pipes/noimage.pipe';
import { ViewSongComponent } from './components/view-song/view-song.component';
import { LoadingComponent } from './components/share/loading/loading.component';
import { FormBuilder } from '@angular/forms';
import { CreateSongComponent } from './components/create-song/create-song.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListSongsComponent,
    NoimagePipe,
    ViewSongComponent,
    LoadingComponent,
    CreateSongComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash:true })
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
