import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongsService } from 'src/app/services/songs.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-songs',
  templateUrl: './list-songs.component.html',
  styleUrls: ['./list-songs.component.css']
})
export class ListSongsComponent implements OnInit {

  loading: boolean;
  user: string;
  listSongs: any[] = [];

  constructor(private activeRouter: ActivatedRoute,
    private songsService: SongsService,
    private router: Router,
    private location: Location) {

    this.loading = true;
    this.activeRouter.params.subscribe(params => {
      console.log(params['user']);
      this.user = params['user'];
      this.getSongs();
    });
  }

  ngOnInit(): void {
  }

  getSongs() {
    this.loading = true;
    this.songsService.getAll().subscribe((songsData: any) => {
      console.log('listSongs', songsData);
      this.listSongs = songsData;
      this.loading = false;
    });
  }

  viewSong(id: number) {
    this.router.navigate(['/view', this.user, id]);
  }

  createSong() {
    this.router.navigate(['/create',this.user]);
  }

  deleteSong(id: number) {
    this.songsService.deleteById(id).subscribe((deleteDate)=>{
      location.reload();
    })
  }

}
