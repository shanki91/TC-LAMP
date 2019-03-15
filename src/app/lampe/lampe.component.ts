import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.scss']
})
export class LampeComponent {

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
