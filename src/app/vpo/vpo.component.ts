import { Component, OnInit } from '@angular/core';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-vpo',
  templateUrl: './vpo.component.html',
  styleUrls: ['./vpo.component.css']
})
export class VpoComponent implements OnInit {
  po: any;

  constructor(private vgr: VenserviceService) { }

  ngOnInit(): void {
   this.vgr.getvpo().subscribe((grr)=>{
     this.po = grr['data']
     console.log(this.po)
     
   })

  }

}
