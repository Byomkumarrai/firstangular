import { Component, OnInit } from '@angular/core';
import { ApiServices } from './services/freeapi.services';
import { Comments } from './classes/comments';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lstcomment: Comments[];
  constructor(private ApiService: ApiServices) {
  }

  ngOnInit() {

    this.ApiService.getcomments()
      .subscribe
      (
       data => { this.lstcomment = data; }
      );
  }

}
