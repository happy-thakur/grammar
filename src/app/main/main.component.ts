import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

path: string;
allData: Array<object> = [];
filtered: Array<object> = [];
  constructor(private activatedRoute: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    let sub = this.activatedRoute.params.subscribe((data: any) =>{
  		this.path = data['id'];
      console.log(this.path);
      this.getData();
  	},
    (err) => console.log(err));
    // now get the data..
  }


  getData() {
    let sub = this.http.get("http://localhost:1111/"+this.path).map((data) => data.json()).subscribe((data) => {
      this.allData = data;
      this.filtered = data;
    },
    (err) => {
      console.log(err);
    },
    () => {
      // complete..
      sub.unsubscribe();
    })
}

format(x) {
  return (x.substring(x.lastIndexOf('/')+1, x.length));
}

filterData(data) {
  // console.log(eve);
  console.log(data);
  this.filtered = this.allData.filter(function(ele) {
    return (ele['text'].includes(data));
  });
}
}
