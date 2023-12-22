import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  searchForm: FormGroup; // Fix the type declaration and remove the incorrect initialization
  searchCtrl: FormControl = new FormControl(''); // Add searchCtrl property
  listPokemonsAvailable!: any[]
  listPokemonsDiplayed!: any[]

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.searchCtrl = new FormControl('', {
      validators: [Validators.required],
      nonNullable: true
    });

    this.searchForm = this.formBuilder.group({
      search: this.searchCtrl
    });

    this.searchCtrl.valueChanges.subscribe((searchTerm: string) => {
      this.filterPokemonsByName(searchTerm);
    });
  }

  ngOnInit() {
    // Initialize your data or fetch it from your service
    this.dataService.getPokemons(10, 1).subscribe((pokemons: any[]) => {
      this.listPokemonsAvailable = pokemons;
      this.listPokemonsDiplayed = pokemons;
    });
  }

  filterPokemonsByName(searchTerm: string) {
    console.log(searchTerm);
    if (!searchTerm) {
      // If the search term is empty, show all pokemons
      this.listPokemonsDiplayed = this.listPokemonsAvailable;
    } else {
      // Filter pokemons by name using the search term
      this.listPokemonsDiplayed = this.listPokemonsAvailable.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}



