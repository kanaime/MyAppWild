export class ImageOfTheDay {
  constructor(
    public url?: string,
    public explanation?: string
  ){}
  loadFromJson(json: any){
    Object.assign(this, json)
  }
}
