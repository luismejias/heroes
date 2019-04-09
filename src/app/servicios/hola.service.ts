import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
const httpOptionsUrl = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }), withCredentials: true
};

@Injectable({
  providedIn: 'root'
})

export class HolaService {

  constructor(
    private http: HttpClient, private router: Router
  ) {
    console.log('servicio hola listo para usar');
   }

   get(){ 
    return this.http.post(environment.url+'/api/item/',
      {
        "id":1,
        "name": "test44"
      },
      httpOptionsUrl).pipe(map((res: any) => {       
        return res;
      }));
  }
}





