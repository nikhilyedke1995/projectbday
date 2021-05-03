import { Injectable } from '@angular/core';
import { Details } from './details.model'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
@Injectable()
export class FetchdetailsService {

  details:AngularFirestoreCollection<Details>;
  wishes:Observable<Details[]>;
  constructor(private database:AngularFirestore) {
    this.wishes = database.collection('wishes').valueChanges();
   }

   getWishes(){
    return this.wishes;
   }

  


  }
