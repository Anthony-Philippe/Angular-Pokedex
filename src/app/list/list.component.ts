import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  itemsPerPage = 10;
  totalPokemons!: number;

  constructor(
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    const offset = (this.page - 1) * this.itemsPerPage;
    this.dataService.getPokemons(this.itemsPerPage, offset)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;
        this.pokemons = [];
        response.results.forEach((result: { name: string; }) => {
          this.dataService.getMoreData(result.name)
            .subscribe((uniqResponse: any) => {
              this.pokemons.push(uniqResponse);
              console.log(this.pokemons);
            });
        });
      });
  }

}
