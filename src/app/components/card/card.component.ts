import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() meaning: any;

  moreDefinitions: boolean = false;
  haveMoreDefinitions: boolean = true;

  haveSynonyms: boolean = false;
  synonyms: string = "";

  moreMessage: string = "See more...";

  ngOnInit(): void {
    this.haveMoreDefinitions = this.meaning.definitions.length < 3 ? false : true;

    if (this.meaning.synonyms && this.meaning.synonyms.length > 0) {
      this.haveSynonyms = true;

      this.meaning.synonyms.map((synonym: string, index: number) => {
        if (index == this.meaning.synonyms.length - 1) {
          this.synonyms += synonym + ".";
        } else {
          this.synonyms += synonym + ", ";
        }
      });
    }
  }

  seeMoreDefinition(): void {
    if (!this.moreDefinitions) {
      this.moreDefinitions = true;
      this.moreMessage = "See less...";
    } else {
      this.moreDefinitions = false;
      this.moreMessage = "See more...";
    }
  }
}
