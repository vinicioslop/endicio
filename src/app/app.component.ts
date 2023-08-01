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

  constructor() { }

  async searchWord(word: string) {
    const response = await fetch(this.apiUrl + word, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    });

    const dados = await response.json();

    this.wordResponseData = dados[0];
  }
}