import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SongModel } from 'src/app/model/SongModel';

@Component({
  selector: 'app-view-song',
  templateUrl: './view-song.component.html',
  styleUrls: ['./view-song.component.css']
})
export class ViewSongComponent implements OnInit {

  loading: boolean;
  errorExist: boolean;
  mensajeError: string;
  user: string;
  id: number;
  song: any = {};
  Form: FormGroup;

  constructor(private activeRouter: ActivatedRoute,
    private songsService: SongsService,
    private fb: FormBuilder) {

    this.loading = true;
    this.errorExist = false;
    this.activeRouter.params.subscribe(params => {
      console.log(params['user']);
      this.user = params['user'];
      this.id = params['id'];
      this.getSongById(this.id);
    });

  }

  ngOnInit(): void {

    this.Form = this.fb.group({
      title: new FormControl(this.song.title, [Validators.required]),
      image: new FormControl(this.song.image, [Validators.required]),
      artist: new FormControl(this.song.artist, [Validators.required]),
      genre: new FormControl(this.song.genre, [Validators.required]),
      album: new FormControl(this.song.album, [Validators.required])
    });

  }

  getSongById(id: number) {
    this.loading = true;
    this.songsService.getById(id).subscribe((songData: any) => {
      console.log('songData', songData);
      this.song = songData;
      this.loading = false;
    });
  }

  save(title: string, artist: string, genre: string, album: string, image: string) {
    this.loading = true;
    this.song.title = title;
    this.song.artist = artist;
    this.song.genre = genre;
    this.song.album = album;
    this.song.image = image;
    console.log(this.song);
    if (this.validateSong(this.song)) {
      this.songsService.update(this.song).subscribe((songData: any) => {
        console.log('songData', songData);
        this.loading = false;
      });
    }else{
      this.loading = false;
    }
  }

  validateSong(song: SongModel): boolean {
    if ((song.title.length > 0 && song.title.trim() !== "") &&
      (song.image.length > 0 && song.image.trim() !== "") &&
      (song.artist.length > 0 && song.artist.trim() !== "") &&
      (song.genre.length > 0 && song.genre.trim() !== "") &&
      (song.album.length > 0 && song.album.trim() !== "")) {
      this.mensajeError = '';
      this.errorExist = false;
    } else {
      this.mensajeError = 'Please fill all fields';
      this.errorExist = true;
    }
    return !this.errorExist;
  }

}
