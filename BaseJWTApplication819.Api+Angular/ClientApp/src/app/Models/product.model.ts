export class Product {
  public id: number;
  public title: string;
  public price: number;
  public description: string;
  public image: string;

  constructor(Id: number, Title: string, Price: number, Description: string, Image: string) {
    this.id = Id;
    this.description = Description;
    this.price = Price;
    this.title = Title;
    this.image = Image;
  }
}
