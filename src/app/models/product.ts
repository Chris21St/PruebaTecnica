export class Products {
  idProduct:number
  name: string;
  description: string;
  discount: number;
  SKU: string;
  fragile: boolean;
  price: number;
  ship: boolean;
  stock: number;
  category: string;
  subcategory: string;
  brand: string;
  status: boolean;
  tags?: string;
  photos:Event

  constructor(
    idProduct:number,
    name: string,
    description: string,
    discount: number,
    price: number,
    SKU: string,
    fragile: boolean,
    ship: boolean,
    stock: number,
    category: string,
    subcategory:string,
    brand: string,
    status: boolean,
    tags: string,
    photos:Event
  ) {
    this.idProduct=idProduct
    this.name = name;
    this.description = description;
    this.discount = discount;
    this.price = price;
    this.SKU = SKU;
    this.fragile = fragile;
    this.ship = ship;
    this.stock = stock;
    this.category = category;
    this.subcategory = subcategory;
    this.brand = brand;
    this.status = status;
    this.tags = tags;
    this.photos=photos;
  }
}
