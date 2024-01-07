// Importation des modules et composants
import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  listPokemonsAvailable!: any[]; // On stocke les données des pokémons
  listPokemonsDiplayed!: any[];
  selectedCategory: string = ''; // On stocke la catégorie sélectionnée

  page = 1;
  itemsPerPage = 12;
  totalPokemons = 952;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() { // Méthode pour récupérer les pokémons
    const offset = (this.page - 1) * this.itemsPerPage;
    this.dataService.getPokemons(this.totalPokemons, offset).subscribe((pokemons: any[]) => {
      this.listPokemonsAvailable = pokemons;
      this.listPokemonsDiplayed = pokemons;
    });
  }

  onCategoryChange(event: any) { // Méthode pour récupérer la catégorie sélectionnée
    this.selectedCategory = event.target.value;
    this.filterPokemonByCategory();
  }

  filterPokemonByCategory() { // Méthode pour filtrer les pokémons par catégorie
    if (!this.selectedCategory) { // Si aucune catégorie n'est sélectionnée, on affiche aucun pokémons
      this.listPokemonsDiplayed = this.listPokemonsAvailable;
    } else { // Sinon, on affiche les pokémons de la catégorie sélectionnée
      this.listPokemonsDiplayed = this.listPokemonsAvailable.filter((pokemon) =>
        pokemon.types[0].type.name.toLowerCase().includes(this.selectedCategory.toLowerCase())
      );
    }
  }
}
