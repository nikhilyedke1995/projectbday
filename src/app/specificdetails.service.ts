import { Injectable } from '@angular/core';
import { Details } from './details.model'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable()
export class SpecificdetailsService {

    details:AngularFirestoreCollection<Details>;
    
  
    constructor(private database : AngularFirestore){
    }

    getUserWishes(id:number){
           return this.database.collection('wishes').doc(id.toString()).valueChanges();
          }
}