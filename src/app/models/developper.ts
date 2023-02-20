import { Skill } from "./skill";

export class Developper {
  constructor(
    public firstname: string,
    public lastname: string,
    public age: number,
    public gender: string,
    public bio: string,
    public skills: Array<Skill>
  ){}
}
