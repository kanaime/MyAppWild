export class User {
  //private id: number;
  private email: string;
  private firstname : string;
  private lastname: string;
  private password: string
constructor(email: string, firstname: string, lastname: string, password: string){

  this.email = email;
  this.firstname = firstname;
  this.lastname = lastname;
  this.password = password;
}
getEmail():string{
  return this.email;
}
getFirstname() :string{
  return this.firstname;
}
getLastname():string{
  return this.lastname;
}
passwordVerify(pass: string) : boolean{
  return this.password === pass ? true : false;
}
}
