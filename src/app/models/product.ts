export class Product {
  idProduct:number
  name: string;
  description: string;
  discount: number;
  sku: string;
  fragile: boolean;
  price: number;
  ship: boolean;
  stock: number;
  category: number;
  subcategory: number;
  brand: number;
  status: boolean;
  tags: string;
  photos:Event

  constructor(
    idProduct:number,
    name: string,
    description: string,
    discount: number,
    price: number,
    sku: string,
    fragile: boolean,
    ship: boolean,
    stock: number,
    category: number,
    subcategory: number,
    brand: number,
    status: boolean,
    tags: string,
    photos:Event
  ) {
    this.idProduct=idProduct
    this.name = name;
    this.description = description;
    this.discount = discount;
    this.price = price;
    this.sku = sku;
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
