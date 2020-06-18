import { Component, OnInit } from '@angular/core';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-vqot',
  templateUrl: './vqot.component.html',
  styleUrls: ['./vqot.component.css']
})
export class VqotComponent implements OnInit {
  qout: any;

  constructor(private vgr: VenserviceService) { }

  ngOnInit(): void {
   this.vgr.getvgr().subscribe((grr)=>{
     this.qout = grr['data']
     console.log(this.qout)
     
   })

  }

}
