import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Post } from './models/item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwademo';
  posts: any;

  constructor(private dataService: DataService) { }
  ngOnInit() {
    this.fetchPosts();
  }
  fetchPosts() {
    this.dataService.fetchPosts().subscribe(res => {
      console.log(res);
      this.posts = res;
    }, (err) => {
      console.log(err);
    });
  }
}
