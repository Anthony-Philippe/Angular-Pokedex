import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  searchForm: FormGroup;
  searchCtrl: FormControl = new FormControl('');
  listPokemonsAvailable!: any[]
  listPokemonsDiplayed!: any[]

  page = 1;
  itemsPerPage = 12;
  totalPokemons = 952;

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.searchCtrl = new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    });

    this.searchForm = this.formBuilder.group({
      search: this.searchCtrl,
    });

    this.searchCtrl.valueChanges.subscribe((searchTerm: string) => {
      this.filterPokemonsByName(searchTerm);
    });

  }

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

  filterPokemonsByName(searchTerm: string) {
    if (!searchTerm) {
      this.listPokemonsDiplayed = this.listPokemonsAvailable;
    } else {
      this.listPokemonsDiplayed = this.listPokemonsAvailable.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }

  onPageChange(event: number) {
    this.page = event;
    this.getPokemons();
  }
}
