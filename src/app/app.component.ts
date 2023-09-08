import { Component } from '@angular/core';

import { WordDataService } from "./services/worddata.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  apiUrl: string = 'https://api.dictionaryapi.dev/api/v2/entries/en/';
  wordResponseData = {
    "word": "",
    "phonetic": "",
    "phonetics": [
      {
        "text": "",
        "audio": ""
      },
      {
        "text": ""
      }
    ],
    "origin": "",
    "meanings": [
      {
        "partOfSpeech": "",
        "definitions": [
          {
            "definition": "",
            "example": "",
            "synonyms": [],
            "antonyms": []
          }
        ]
      },
      {
        "partOfSpeech": "",
        "definitions": [
          {
            "definition": "",
            "example": "",
            "synonyms": [],
            "antonyms": []
          }
        ]
      },
      {
        "partOfSpeech": "",
        "definitions": [
          {
            "definition": "",
            "example": "",
            "synonyms": [],
            "antonyms": []
          }
        ]
      }
    ]
  };
  audioSrc: string = "";
  phonetic: string = "";
  word: any;

  constructor(private wordDataService: WordDataService) {
    this.wordDataService.word.subscribe((newWord) => {
      this.word = newWord;
      this.searchWord();
    });
  }

  async searchWord() {
    const apiReponseBox = document.getElementById("apiResponseBox");

    const response = await fetch(this.apiUrl + this.word, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });

    const dados = await response.json();
    this.wordResponseData = dados[0];

    this.wordResponseData.phonetics.map((phonetic) => {
      if (phonetic.audio) {
        this.audioSrc = phonetic.audio;
        this.phonetic = phonetic.text;
      }
    });

    if (apiReponseBox) {
      apiReponseBox.className = "api-response show";
    }
  }
}