import { Component, OnInit } from '@angular/core';
import { SongsService } from 'src/app/services/songs.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SongModel } from 'src/app/model/SongModel';

@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  loading: boolean;
  errorExist: boolean;
  mensajeError: string;
  user: string;

  constructor(private activeRouter: ActivatedRoute,
    private songsService: SongsService,
    private router: Router) {
    this.loading = true;
    this.errorExist = false;
    this.activeRouter.params.subscribe(params => {
      console.log(params['user']);
      this.user = params['user'];
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  save(title: string, artist: string, genre: string, album: string, image: string) {
    this.loading = true;
    let song:SongModel=new SongModel();
    song.title = title;
    song.artist = artist;
    song.genre = genre;
    song.album = album;
    song.image = image;
    song.user_song = this.user;
    console.log(song);
    if (this.validateSong(song)) {
      this.songsService.save(song).subscribe((songData: any) => {
        console.log('songData', songData);
        this.loading = false;
        this.router.navigate(['/list', this.user]);
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
