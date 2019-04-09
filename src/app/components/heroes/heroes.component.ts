import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe } from './../../servicios/heroes.service'
import { Router } from '@angular/router'
import { HolaService } from 'src/app/servicios/hola.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];
  hola: any;
  constructor(
    private _HeroesService: HeroesService,
    private _HolaService: HolaService,
    private router:Router
  ) { 
    console.log('constructor');
  }

  ngOnInit() {    
    this.verHola();
    this.heroes= this._HeroesService.getHeroes();
    // console.log(this.heroes);

  }

  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
  verHola() {
    this._HolaService.get()
           .subscribe((res: any) => {
             this.hola = res;
           }
             , error => { },
             () => {
             });
       }

  
    }
