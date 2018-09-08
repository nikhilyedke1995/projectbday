import { Component, OnInit, OnDestroy } from '@angular/core';
import { FetchdetailsService } from '../fetchdetails.service';
import { Details } from '../details.model';
import { Subscription } from 'rxjs';
@Component({
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, OnDestroy {
 

  details:Details[];
  length:number;
  private fetchSubscribe : Subscription;
  constructor(private fetchDetails:FetchdetailsService ) { 
    console.log('inside of gallery')
  }

  ngOnInit() {
    console.log('Gallery ');
    
    this.fetchSubscribe = this.fetchDetails.getWishes().subscribe(
      data=>{this.details = data.sort((a,b)=>{
        return a.name<b.name? -1 : (a.name>b.name? 1: 0);
      })

      }
    )
  }

  setMyStyle(wish:Details){
    const profileImage = wish.profileImage;
    let style ={
      'background-image': 'url('+profileImage+')',
      'background-size':'cover'
    }
    return style;
  }

  getNumber(){
    return this.length;
  }

  limitString(limit:string){
    return limit.substring(0,100)+"...";
  }

  ngOnDestroy(): void {
    console.log("Gallery Destroy");
    this.fetchSubscribe.unsubscribe();
  } 

}
