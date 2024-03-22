import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tune } from './tune';

@Injectable({
  providedIn: 'root'
})
export class TunesService {

  private tunesUrl = "http://dev.crossgatesolutions.co.ke:8080/tunes";

   // Replace this with your API URL

  constructor(private http: HttpClient) { }

  getTunes(): Observable<Tune[]> {
    return this.http.get<Tune[]>(this.tunesUrl);
  }

}
