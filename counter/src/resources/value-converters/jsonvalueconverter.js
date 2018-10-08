export class JsonValueConverter {
  toView(obj) {
    if (obj) {
      console.log(obj)
      console.log(JSON.stringify(obj, null, 2));
    }

    return obj;
  }
}
