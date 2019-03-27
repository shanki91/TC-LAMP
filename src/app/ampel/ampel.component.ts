import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LampeComponent } from '../lampe/lampe.component';

@Component({
  selector: 'app-ampel',
  templateUrl: './ampel.component.html',
  styleUrls: ['./ampel.component.scss']
})
export class AmpelComponent {
  @ViewChild("LampeComponent") LampeComponent : LampeComponent;

  @Input() Status1 : string = 'hidden';
  @Input() Status2 : string = 'hidden';
  @Input() Status3 : string = 'hidden';
  @Input() Statusmaster : any = 0; 
  @Input() Farbe1 : string = 'red';
  @Input() Farbe2 : string = 'yellow';
  @Input() Farbe3 : string = 'green';
   TimerVAR: number;

Ampeltimer() {
 this.TimerVAR = window.setInterval(() => this.Ampelweiter(), 2000);
}


AmpelAus() {
  this.Statusmaster = 0;
  this.ChangeAmpel();
  window.clearInterval(this.TimerVAR);
}
Ampelweiter(){
if(this.Statusmaster == 4 )
  {
    this.Statusmaster = 1
  }
  else
  {
    this.Statusmaster++
  }
  this.ChangeAmpel()

}

  ChangeAmpel () {
    if(this.Statusmaster == 0)
    {
      this.Status1 = 'hidden';
      this.Status2 = 'hidden';
      this.Status3 = 'hidden';
    }
    else if(this.Statusmaster == 1)
    {
      this.Status1 = 'visible';
      this.Status2 = 'hidden';
      this.Status3 = 'hidden';
    }
    else if(this.Statusmaster == 2)
    {
      this.Status1 = 'visible';
      this.Status2 = 'visible';
      this.Status3 = 'hidden';
    }
    else if(this.Statusmaster == 3)
    {
      this.Status1 = 'hidden';
      this.Status2 = 'hidden';
      this.Status3 = 'visible';
    }
    else if(this.Statusmaster == 4)
    {
      this.Status1 = 'hidden';
      this.Status2 = 'visible';
      this.Status3 = 'hidden';
    }

   
  }

  

}
