import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PcPart } from '../pc-part.model';
import { PcPartsService } from '../pc-parts.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public pcPartsService: PcPartsService) { }

  type: string = "Motherboard";
  brand: string = "ASUS";
  spec: string = "Supports i3, Max 32 GB Ram";
  quantity: number = 4;
  unit_cost: number = 300;
  private pcPartsSub: Subscription;

  pcParts: PcPart[] = [];

  onAdd(){
    this.pcPartsService.addPcPart(this.type, this.brand, this.spec, this.quantity, this.unit_cost);
  }

  ngOnInit(): void {
    this.pcPartsSub = this.pcPartsService.getPcPartsUpdateListener()
    .subscribe((pcParts: PcPart[])=>{
      this.pcParts = pcParts;
    });
  }

  ngOnDestroy(){
    this.pcPartsSub.unsubscribe();
  }

}
