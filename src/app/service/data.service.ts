// Importation des modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient // Injection du service HttpClient
  ) { }

  getPokemons(limit: number, offset: number) { // Méthode pour récupérer les pokémons de l'api
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .pipe(
        map((res: any) => res.results),
        map((results: any[]) => { // On récupère les résultats de la requête
          const final: any[] = []
          results.forEach((result: { name: string; }) => {
            this.getMoreData(result.name)
              .subscribe((uniqResponse: any) => {
                final.push(uniqResponse) // On push les résultats dans un tableau
              });
          });
          return final
        }
        )
      );
  }

  getMoreData(name: string) { // Méthode pour récupérer les données d'un pokémon
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }

}
