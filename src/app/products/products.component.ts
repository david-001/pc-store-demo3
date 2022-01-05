import { Component, OnInit } from '@angular/core';
import { PcPart } from '../pc-part.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  type: string = "Motherboard";
  brand: string = "ASUS";
  spec: string = "Supports i3, Max 32 GB Ram";
  quantity: number = 4;
  unit_cost: number = 300;


  pcParts: PcPart[] = [
    {type: "RAM", brand: "Kingston", spec: "4 GB", quantity: 3, unit_cost: 300},
    {type: "CPU", brand: "Intel", spec: "i5 core", quantity: 1, unit_cost: 500}
  ];

  onAdd(){
    let tmpPart: PcPart = {type:this.type, brand: this.brand, spec: this.spec, quantity: this.quantity, unit_cost: this.unit_cost};
    this.pcParts.push(tmpPart);
  }

  ngOnInit(): void {

  }

}
