import { Options } from "./Options";

export class Discussion {
  public id: number;
  public questiontext: string;
  public options: Array<Options>;


  constructor(Id: number, questiontext:string,options: Array<Options>) {
    this.id = Id;
    this.questiontext = questiontext;
    this.options = this.options;

  }
}
