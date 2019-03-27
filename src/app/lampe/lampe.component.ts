import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lampe',
  templateUrl: './lampe.component.html',
  styleUrls: ['./lampe.component.scss']
})
export class LampeComponent {

  title = 'TC-LAMP';
  @Input() bStatuslampe: boolean = true; 
  @Input() Lampenfarbe: string = 'yellow';
  @Input()Lampenfarbe_bu: string = 'visible';
  @Input()Powerbtntext: string = 'Aus';



    public Changestatelamp() {
     
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
