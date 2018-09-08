import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { WelcomenoteComponent } from './welcomenote/welcomenote.component';
import { DetailimageComponent } from './detailimage/detailimage.component';
import { MaterialModule } from 'src/app/material.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FetchdetailsService } from './fetchdetails.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { SpecificdetailsService } from './specificdetails.service';


const routes :Routes = [
  {path:'welcomenote',component:WelcomenoteComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'detailimage',
    children:[{path:':id',component:DetailimageComponent}]
  },
  { path: '', redirectTo: 'welcomenote', pathMatch: 'full' },
  {path:'**',redirectTo:'welcomenote'}
];

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    WelcomenoteComponent,
    DetailimageComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [FetchdetailsService,
            SpecificdetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
