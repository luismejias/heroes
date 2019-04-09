import { Component, OnInit } from '@angular/core';
import {HeroesService } from './../../servicios/heroes.service'
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {
heroeResult: any = {};
termino: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private _HeroesService: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
       this.heroeResult = this._HeroesService.buscarHeroes(params['termino']);
       console.log(params,this.heroeResult);
    })
  }

  ngOnInit() {
    
  } 

}
