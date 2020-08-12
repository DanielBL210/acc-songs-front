import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ListSongsComponent } from './components/list-songs/list-songs.component';
import { ViewSongComponent } from './components/view-song/view-song.component';
import { CreateSongComponent } from './components/create-song/create-song.component';




export const ROUTES: Routes =[
    { path: 'login', component: LoginComponent },
    { path: 'create/:user', component: CreateSongComponent },
    { path: 'list/:user', component: ListSongsComponent },
    { path: 'view/:user/:id', component: ViewSongComponent },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

];