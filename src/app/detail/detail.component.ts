// Importation des modules et composants
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pokemon: any;

  constructor(private activeRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void { // On récupère le nom du pokémon dans l'URL
    const name = this.activeRoute.snapshot.paramMap.get('name') ?? '';

    this.dataService.getMoreData(name).subscribe( // On récupère les données du pokémon
      (data) => {
        this.pokemon = data; // On stocke les données du pokémon dans une variable
      }
    )
  }
}
