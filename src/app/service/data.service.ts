import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: number, offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map( (res: any) => res.results),
        map( (results: any[]) => {
          const final: any[] = []
          results.forEach((result: { name: string; }) => {
            this.getMoreData(result.name)
              .subscribe((uniqResponse: any) => {
                final.push(uniqResponse)
              });
            });
            return final
          }
        )
      );
  }

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
