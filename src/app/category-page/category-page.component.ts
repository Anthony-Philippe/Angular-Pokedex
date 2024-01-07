import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.css']
})
export class CategoryPageComponent implements OnInit {
  listPokemonsAvailable!: any[];
  listPokemonsDiplayed!: any[];
  selectedCategory: string = '';

  page = 1;
  itemsPerPage = 12;
  totalPokemons = 952;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    const offset = (this.page - 1) * this.itemsPerPage;
    this.dataService.getPokemons(this.totalPokemons, offset).subscribe((pokemons: any[]) => {
      this.listPokemonsAvailable = pokemons;
      this.listPokemonsDiplayed = pokemons;
    });
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
    this.filterPokemonByCategory();
  }

  filterPokemonByCategory() {
    if (!this.selectedCategory) {
      this.listPokemonsDiplayed = this.listPokemonsAvailable;
    } else {
      this.listPokemonsDiplayed = this.listPokemonsAvailable.filter((pokemon) =>
        pokemon.types[0].type.name.toLowerCase().includes(this.selectedCategory.toLowerCase())
      );
    }
  }
}
