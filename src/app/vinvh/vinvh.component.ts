import { Component, OnInit } from '@angular/core';
import { VenserviceService } from '../venservice.service';

@Component({
  selector: 'app-vinvh',
  templateUrl: './vinvh.component.html',
  styleUrls: ['./vinvh.component.css']
})
export class VinvhComponent implements OnInit {

  inv: any;

  constructor(private vgr: VenserviceService) { }

  ngOnInit(): void {
   this.vgr.getvinvh().subscribe((grr)=>{
     this.inv = grr['data']
     console.log(this.inv)
     
   })

  }

}
