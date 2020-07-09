import { Component, OnInit } from '@angular/core';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-vpay',
  templateUrl: './vpay.component.html',
  styleUrls: ['./vpay.component.css']
})
export class VpayComponent implements OnInit {

  pay: any;
  finalRes: any;

  constructor(private vgr: VenserviceService) { }

  ngOnInit(): void {
   this.vgr.getvpay().subscribe((grr)=>{
     this.pay = grr['data']
     for (let query in this.pay) {
      this.finalRes = this.pay[query]
    }
     console.log(this.pay)
     
   })

  }

}
