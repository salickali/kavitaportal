import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vgr } from './vgrd';
import { Lof } from './lof';
import { Pod } from './pod';
import { Qot } from './qod';

@Injectable({
  providedIn: 'root'
})
export class VenserviceService {

  constructor(private http: HttpClient) { }

  getvgr():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/goodsreceipt', {"lifnr":'STEEL'});
    
  } 
  getvcm():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/creditmemo', {"lifnr":'4500000000'});
    
  } 
  getvpo():Observable<Pod>{
    return this.http.post<Pod>('http://127.0.0.1:8000/vendor/purchaseorders', {"bukrs":'SA01'});
    
  } 
  getvqot():Observable<Qot>{
    return this.http.post<Qot>('http://127.0.0.1:8000/vendor/quotation', {"ekorg":'SA01'});
    
  } 
  getvpay():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/paymentoverdues', {"lifnr":'0000010046'});
    
  } 
  getvinvh():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/invoice', {"lifnr":'STEEL'});
    
  } 
  getvinvp():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getlog(logo:any):Observable<Lof>{
    return this.http.post<Lof>('http://127.0.0.1:8000/vendor/login', logo);
  }
  
}
