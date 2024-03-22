import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Tune } from '../tune';
import { TunesService } from '../tunes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  skiza!: Tune[];
  constructor(private tunesService:TunesService){}
  ngOnInit() {
    this.tunesService.getTunes().subscribe(tunes=>{
      console.log("These are my tunes", tunes);
      this.skiza = tunes;
    })

    throw new Error('Method not implemented.');
  }

  openDialer(code: number) {
    const ussdCode = `*811*${code}#`;
    window.location.href = `tel:${ussdCode}`;
  }
  
}

