import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { Signal } from './signal';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {
  // string
  name = 'Andrei';
  // int
  age = 36;
  // boolean
  married = true;
  // array
  itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google'];
  brands: string[] = ['Apple', 'Dell', 'HP'];


  constructor() {
    this.iterateEnum();
    this.getKeysofStringEnum();
    this.iterateEnumKeys();
  }

  ngOnInit() {
  }

  // iterate enum
  public iterateEnum(): void {
    console.log('Iterate enum: ');

    for (const role in Role) {
      if (isNaN(Number(role))) {
        console.log(role);
      }
    }
  }

  public getKeysofStringEnum(): void {
    console.log('Iterate keys of string enum: ');
    Object.keys(Signal).forEach(key => console.log(key));
  }

  public iterateEnumKeys() {
    console.log('Iterate enum keys: ');
    Object.keys(Role).filter(key => !isNaN(Number(Role[key]))).forEach(key => console.log(Role[key]));
     }
}
