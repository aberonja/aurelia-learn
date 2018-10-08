export class App {
  constructor() {
    this.message = 'Hello World!';
    this.mau = 'mau mau ket ket';
  }
  attached() {
    console.log(this.myHeading); // will return the native DOM element
  }
}
