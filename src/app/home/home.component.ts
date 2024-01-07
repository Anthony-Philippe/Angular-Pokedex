// Importation des modules et composants
import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() pokemons!: any[] // On récupère les pokémons depuis le composant parent

  page = 1;
  items = 3;
  totalPokemons!: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() { // Méthode pour récupérer les pokémons aléatoirements
    const limit = this.items;
    const offset = Math.floor(Math.random() * 1000);

    this.dataService.getPokemons(limit, offset)
      .subscribe((pokemons: any[]) => {
        this.pokemons = pokemons;
      });
  }
}
