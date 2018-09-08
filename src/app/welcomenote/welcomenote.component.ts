import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './welcomenote.component.html',
  styleUrls: ['./welcomenote.component.css']
})
export class WelcomenoteComponent implements OnInit {
isCardExpanded = true;
imagesrc:string = "assets/images/sharm.png"; 
balloons:string = "assets/images/balloons.png";
  
constructor(private _router:Router) { }

  ngOnInit() {
  }

entrypage(){
  console.log("local")
  this._router.navigate(['gallery']);
}


}
