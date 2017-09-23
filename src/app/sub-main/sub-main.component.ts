import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-sub-main',
  templateUrl: './sub-main.component.html',
  styleUrls: ['./sub-main.component.css']
})
export class SubMainComponent implements OnInit {

path: string;
path2: string;
allData: object;
exist: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private http: Http) { }

  ngOnInit() {
    let sub = this.activatedRoute.params.subscribe((data: any) =>{
      // gettting parents route name..
      this.path2 = this.activatedRoute.snapshot.parent.params['id'];
      console.log(this.path2);
  		this.path = data['subid'];
      // this.path2 = data['id2'];
      console.log(this.path);
      this.getData();
  	},
    (err) => console.log(err));
    // now get the data..
  }


  getData() {
    let sub = this.http.get("http://localhost:1111/"+this.path2+"/"+this.path).map((data) => data.json()).subscribe((data) => {
      if(data.length > 0){
        this.allData = data;
        if(this.allData[0][this.path] == null) {
          this.allData[0] = data[1];
        }
        this.exist = true;
      }
        else
        this.exist = false;
      console.log(data);
    },
    (err) => {
      console.log(err);
    },
    () => {
      // complete..
      sub.unsubscribe();
    })
}
}
