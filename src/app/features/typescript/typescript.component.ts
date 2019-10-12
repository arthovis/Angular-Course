import { DemoPromises } from './promises';
import { DemoConst } from './const';
import { Component, OnInit } from '@angular/core';
import { Role } from './role';
import { Signal } from './signal';
import { DemoLet } from './let';
import { DemoVariables } from './variables';
import { DemoStrings } from './strings';
import { DemoFatArrow } from './fat-arrow';
import { DemoObjectDestructuring } from './object-destructuring';
import { DemoIteration } from './iteration';
import { DemoMaps } from './maps';
import { DemoSets } from './set';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.scss']
})
export class TypescriptComponent {
  // // string
  // name = 'Andrei';
  // // int
  // age = 36;
  // // boolean
  // married = true;
  // // array
  // itCompanies: Array<string> = ['IBM', 'Microsoft', 'Google'];
  // brands: string[] = ['Apple', 'Dell', 'HP'];


  constructor() {
    // this.iterateEnum();
    // this.getKeysofStringEnum();
    // this.iterateEnumKeys();

    // const demoLet: DemoLet = new DemoLet();
    // demoLet.testLocalVariables();

    // const demoConst: DemoConst = new DemoConst();
    // demoConst.testConst();
    // demoConst.mutateObject();
    // demoConst.makeObjectImmutable();

    // const demoVariables: DemoVariables = new DemoVariables();
    // demoVariables.declareVariables();

    // const demoStrings: DemoStrings = new DemoStrings();
    // demoStrings.templateString();
    // demoStrings.variablesSubstitution();

    // const demoFatArrow: DemoFatArrow = new DemoFatArrow();
    // demoFatArrow.testFatArrow();
    // demoFatArrow.testFatArrowWithArguments();

    // const demoObjectDestructuring: DemoObjectDestructuring = new DemoObjectDestructuring();
    // demoObjectDestructuring.objectDestructuring();

    // const demoIteration: DemoIteration = new DemoIteration();
    // demoIteration.testFor();
    // demoIteration.testForInObject();
    // demoIteration.testForInArray();
    // demoIteration.testForOf();

    // const demoMaps: DemoMaps = new DemoMaps();
    // demoMaps.testMap();

    // const demoSets: DemoSets = new DemoSets();
    // demoSets.testSets();

    const demoPromises: DemoPromises = new DemoPromises();
    // demoPromises.testSuccessPromise();
    // demoPromises.testErrorPromise();
    // demoPromises.promiseChainability();
    // demoPromises.promiseErrorHandling();
    demoPromises.promiseInTypescript();
  }
}
