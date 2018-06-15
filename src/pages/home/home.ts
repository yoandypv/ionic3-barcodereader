import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private result: string = "None"; 

  constructor(public navCtrl: NavController, 
    public barcodeScanner: BarcodeScanner, 
    public toastCtrl: ToastController) {

  }

  scanNow() {
   

    this.barcodeScanner.scan(
     /* {
        preferFrontCamera : true, // iOS and Android
        showFlipCameraButton : true, // iOS and Android
        showTorchButton : true, // iOS and Android
        torchOn: true, // Android, launch with the torch switched on (if available)       
        prompt : "Place a barcode inside the scan area", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: false // iOS and Android
    } */
      
    ).then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.result = JSON.stringify(barcodeData);
     

     }).catch(err => {
         console.log('Ha ocurrido un error', err);
         this.result = "Ha ocurrido un error";
     });
  }

}
