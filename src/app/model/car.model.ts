import { Brand } from "./brand";
import { Country } from "./country";

export class Car {
  public id: string;
  public createdAt: Date;
  public lastUpdate: Date;


  constructor(
    public brand: Brand,
    public country: Country,
    public registration: Date,

  ) {

  }

}
 export interface ICar {
  id: string;
  brand: Brand;
  country: Country;
  createdAt: Date;
  registration: Date;
  lastUpdate: Date;
}


