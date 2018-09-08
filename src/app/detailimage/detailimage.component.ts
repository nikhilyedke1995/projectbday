import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecificdetailsService } from '../specificdetails.service';
import { PlatformLocation } from '@angular/common';
import { Details } from '../details.model';

@Component({
  selector: 'app-detailimage',
  templateUrl: './detailimage.component.html',
  styleUrls: ['./detailimage.component.css']
})
export class DetailimageComponent implements OnInit {

  detailWish:Details;
  constructor(private route:ActivatedRoute, private specificDetails: SpecificdetailsService) {
    console.log('inside of detail');
   }

  ngOnInit() {
    
    this.route.params.subscribe(
      params=>{console.log("hello " + params['id'])
      this.specificDetails.getUserWishes(params['id']).subscribe(
        data=>this.detailWish = data
      );
    }
    
    )
  }

}
