export class User {
  name: string;
  firstname: string;
  age: number;
  quote: string;
  photo: string;
  constructor(name: string, firstname: string, age: number, quote:string, photo: string){
    this.name = name;
    this.age = age;
    this.firstname = firstname;
    this.quote = quote;
    this.photo = photo;
  }
}
