import { Component, OnInit } from '@angular/core';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-vinvp',
  templateUrl: './vinvp.component.html',
  styleUrls: ['./vinvp.component.css']
})
export class VinvpComponent implements OnInit {
  invp: any;

  constructor(private vgr: VenserviceService) { }

  ngOnInit(): void {
   this.vgr.getvinvp().subscribe((grr)=>{
     this.invp = grr['data']
     console.log(this.invp)
     
   })

  }

}
