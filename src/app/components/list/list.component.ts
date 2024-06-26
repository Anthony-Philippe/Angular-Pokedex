// Importation des modules et composants
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() pokemons!: any[] // On récupère les pokémons depuis le composant parent

  page = 1;
  itemsPerPage = 12;
  totalPokemons!: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void { // On écoute les changements de valeur du tableau de pokémons
    if (this.pokemons != null) {
      this.totalPokemons = this.pokemons.length
    }
  }

}
