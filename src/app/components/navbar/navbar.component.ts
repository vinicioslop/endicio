import { Component } from '@angular/core';

import { WordDataService } from "../../services/worddata.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private wordDataService: WordDataService) { }

  setWord(word: any): void {
    this.wordDataService.setState(word);
  }
}
