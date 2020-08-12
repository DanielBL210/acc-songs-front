import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SongModel } from '../model/SongModel';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  evironment:string="http://localhost:8080";

  constructor(private http: HttpClient) { }

  getService(query: string) {
    const url = `${this.evironment}/songs/${ query }`;    
    return this.http.get(url);
  }

  postService(query: string,body: any) {
    const url = `${this.evironment}/songs/${ query }`;    
    return this.http.post(url,body);
  }

  putService(query: string,body: any) {
    const url = `${this.evironment}/songs/${ query }`;    
    return this.http.put(url,body);
  }

  deleteService(query: string) {
    const url = `${this.evironment}/songs/${ query }`;    
    return this.http.delete(url);
  }

  getAll() {    
    return this.getService('getAll');      ;
  }

  save(song: SongModel) {    
    return this.postService('save',song);      ;
  }

  update(song: SongModel) {    
    return this.putService(`update/${song.id}`,song);      
  }

  getById(id: number) {    
    return this.getService(`getById/${id}`);      ;
  }

  deleteById(id: number) {    
    return this.deleteService(`deleteById/${id}`);      ;
  }



}
