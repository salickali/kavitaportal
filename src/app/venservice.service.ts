import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vgr } from './vgrd';
import { Lof } from './lof';

@Injectable({
  providedIn: 'root'
})
export class VenserviceService {

  constructor(private http: HttpClient) { }

  getvgr():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getvcm():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getvpo():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getvqot():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getvpay():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getvinvh():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getvinvp():Observable<Vgr>{
    return this.http.post<Vgr>('http://127.0.0.1:8000/vendor/purchaseorders', {"lifnr":''});
    
  } 
  getlog():Observable<Lof>{
    return this.http.post<Lof>('http://127.0.0.1:8000/vendor/login', {"lifnr":''});
  }
  
}
