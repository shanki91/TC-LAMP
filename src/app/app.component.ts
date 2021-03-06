import { Component } from '@angular/core';
import { preserveWhitespacesDefault } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'TC-LAMP';
  
  bStatuslampe: boolean = true ; 
  Lampenfarbe: string = 'yellow';
  Lampenfarbe_bu: string = 'visible';
  Powerbtntext: string = 'Aus';



    public Changestatelamp() : void  {
     
     if(this.bStatuslampe == true){
      this.Powerbtntext = 'Ein';
      this.Lampenfarbe_bu = "hidden";
      }
    else if(this.bStatuslampe == false){
      this.Powerbtntext = 'Aus';
      this.Lampenfarbe_bu = "visible";
      }
      this.bStatuslampe = !this.bStatuslampe;
  }


}
