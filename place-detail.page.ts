import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { PlacesService } from '../../places.service';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  place: any;

  constructor(private router: Router,
              private navCtrl: NavController,
              private placesService: PlacesService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  onBookPlace() {
   //this.router.navigateByUrl('/places/tabs/discover');
      //this.navCtrl.navigateBack('/places/tabs/discover');
   //this.navCtrl.pop();
   this.modalCtrl
    .create({
     component: CreateBookingComponent,
     componentProps: { selectedPlace: this.place }
   })
   .then(modalEl => {
  modalEl.present();
  return modalEl.onDidDismiss();
  })
   .then(resultData => {
     console.log(resultData.data, resultData.role);
     if (resultData.role === 'confirm') {
       console.log('Booked!');
     }
   });
}}
