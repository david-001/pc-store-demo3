import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { PcPart } from './pc-part.model';

@Injectable({
  providedIn: 'root'
})
export class PcPartsService {

  private pcParts: PcPart[] = [];
  private pcPartsUpdated = new Subject<PcPart[]>();
  constructor(private http: HttpClient) { }

  addPcPart(type: string, brand: string, spec: string, quantity: number, unit_cost: number){    
    const pcPart: PcPart = {_id: null, type: type, brand: brand, spec: spec, quantity: quantity, unit_cost: unit_cost};
    this.http
    .post<{message: string}>("http://localhost:3000/api/pcparts",pcPart)
    .subscribe(()=>{
      this.pcParts.push(pcPart);
      this.pcPartsUpdated.next([...this.pcParts]);
    });
  }

  getAllPcParts(){
    this.http
      .get<{message: string, pcParts: PcPart[]}>("http://localhost:3000/api/pcparts")
      .subscribe(pcPartData=>{
        this.pcParts = pcPartData.pcParts;
        this.pcPartsUpdated.next([...this.pcParts]);
      });
  }

  deletePcPart(pcPartId: string){
    this.http
      .delete("http://localhost:3000/api/pcparts/"+pcPartId)
      .subscribe(()=>{
        const updatedPcParts = this.pcParts.filter(pcPart=>pcPart._id != pcPartId);
        this.pcParts = updatedPcParts;
        this.pcPartsUpdated.next([... this.pcParts]);
      });
  }

  getPcPartsUpdateListener(){
    return this.pcPartsUpdated.asObservable();
  }

}
