import { Component } from '@angular/core';
import { BrowserQRCodeSvgWriter } from '@zxing/library';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

// tslint:disable-next-line: deprecation
  constructor(private browserQRCodeSvgWriter: BrowserQRCodeSvgWriter) {}

  qrData = null;
  createdCode = null;
  encoded = 'fDA5OTQwMDIwNjgxNDcwMA0KMDAxDQowMDINCjEw';
  decoded = window.atob(this.encoded);

  generateQR() {
    this.browserQRCodeSvgWriter.writeToDom('svg', this.qrData, 250, 250);
    // console.log('create ' + this.qrData + ' QR code');
    // console.log(this.encoded);
    // console.log(this.decoded);
  }
}
