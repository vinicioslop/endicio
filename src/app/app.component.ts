import { Component } from '@angular/core';

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
  audio: string = "";

  constructor() { }

  async searchWord(word: string) {
    let apiReponseBox = document.getElementById("apiResponseBox");

    const response = await fetch(this.apiUrl + word, {
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
        this.audio = phonetic.audio;
      }
    });

    if(apiReponseBox) {
      apiReponseBox.className = "api-response show";
      console.log(this.wordResponseData);
    }
  }
}