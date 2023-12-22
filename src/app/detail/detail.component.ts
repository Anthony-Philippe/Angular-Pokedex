import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  pokemon: any
  constructor(private activeRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit(): void {
    const name = this.activeRoute.snapshot.paramMap.get('name')

    this.dataService.getMoreData(name).subscribe(
      (data) => {
        this.pokemon = data;
      }
    )
  }
}
