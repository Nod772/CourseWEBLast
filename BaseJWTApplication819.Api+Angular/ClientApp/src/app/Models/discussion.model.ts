import { Options } from "./Options";

export class DiscussionModel {
  public id: number;
  public questionText: string;
  public options: Array<Options>;
  public counter:number;

  //constructor(Id: number, questiontext:string,options: Array<Options>) {
  //  this.id = Id;
  //  this.questiontext = questiontext;
  //  this.options = this.options;
  //}
  constructor(){

    this.questionText = "";
    this.counter=0;

  }
}
