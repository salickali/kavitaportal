import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-vendorgr',
  templateUrl: './vendorgr.component.html',
  styleUrls: ['./vendorgr.component.css']
})
export class VendorgrComponent implements OnInit {

  gr : any;

  constructor(private vgr: VenserviceService) { }

  ngOnInit(): void {
   this.vgr.getvgr().subscribe((grr)=>{
     this.gr = grr['data']
     console.log(this.gr)
     
   })

  }

}
