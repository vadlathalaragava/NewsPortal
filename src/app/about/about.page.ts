import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
 
import { ImageModalPage } from '../image-modal/image-modal.page';
@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  sliderOpts ={
    zoom :false,
    slidesPerview:2.5,
    centeredSlides:true,
    spaceBetween:15

  }
  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  openPreview(img){
    this.modalController.create({
      component:ImageModalPage,
      componentProps:{
        img:img
      }
    }).then(modal=>modal.present());
  }



}
