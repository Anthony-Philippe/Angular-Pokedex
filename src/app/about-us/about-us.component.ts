// Importation des modules
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {

  creator1Name: string = 'Alexander Rougier'; // On stocke le nom
  creator1PhotoUrl: string = 'assets/creators/creator1.jpg'; // On stocke le chemin de la photo

  creator2Name: string = 'Florian Amiot';
  creator2PhotoUrl: string = 'assets/creators/creator2.jpg';

  creator3Name: string = 'Anthony Philippe';
  creator3PhotoUrl: string = 'assets/creators/creator3.jpg';

}

