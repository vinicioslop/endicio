import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-response',
  templateUrl: './api-response.component.html',
  styleUrls: ['./api-response.component.css']
})
export class ApiResponseComponent implements OnInit {
  @Input() phonetic: any;
  @Input() wordResponseData: any;
  @Input() audioSrc: any;

  ngOnInit(): void {
    console.log(this.phonetic, this.audioSrc)
  }
}
