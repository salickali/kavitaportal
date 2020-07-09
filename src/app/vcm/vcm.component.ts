import { Component, OnInit } from '@angular/core';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-vcm',
  templateUrl: './vcm.component.html',
  styleUrls: ['./vcm.component.css']
})
export class VcmComponent implements OnInit {
  cm : any;

  constructor(private vgr: VenserviceService) { }

  ngOnInit(): void {
   this.vgr.getvcm().subscribe((grr)=>{
     this.cm = grr['data']['4500000000']
     console.log(this.cm)
     
   })

  }

}
