import { ApiService } from './api-service';
import {inject} from 'aurelia-framework';

@inject(ApiService)
export class App {
  api;
  constructor(api) {
    this.message = 'Hello World!';
    this.mau = 'mau mau ket ket';
    this.api = api;
    this.myObject = {name: 'Dwayne', country: 'Australia', favoriteFood: 'Roast lamb'};
    this.myProp = 'This will never be replaced!';
      
    setTimeout(() => {
      this.myProp = 'Dwayne rules!!!11010101';
    }, 3000);
  }
  attached() {
    console.log(this.myHeading); // will return the native DOM element
    console.log(this);

    this.api.get('/products');
    this.api.post('/products');
  }

//   getProducts() {
//     return this.api.get('/products');
// }

}
