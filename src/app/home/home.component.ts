import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  h1styles: boolean = false;
  greenStyle: boolean = false;

  users: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(data => {
      this.users = data;
      console.log(this.users);
    });
    
  }

  firstClick() {
    let input = document.getElementById("input");
    input.innerText = "clicked";
    
    if(this.h1styles === true) {
      this.h1styles = false;
    } else {
      this.h1styles = true;
    }
  }

  styleVariableClick() {
    
    if(this.greenStyle === true) {
      this.greenStyle = false;
    } else {
      this.greenStyle = true;
    }
  }

  importedClick() {
    this.data.clickToExport();
  }

}
