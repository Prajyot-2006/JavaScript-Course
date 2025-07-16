
export class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id
    this.image = productDetails.image
    this.name = productDetails.name
    this.rating = productDetails.rating
    this.priceCents = productDetails.priceCents
  }

}



class Clothing extends Product { // clothing will get all the properties and method of Product class , Product is a parent class and Clothing is a child class , Clothing will inherit all the properties of Product class
// even we cant see the properties or method now ,but it inherited all properties and methods of its parent class ,even constructor also 
}
const tshirt = new Clothing({
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56
    },
    priceCents: 799,
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  })
console.log(tshirt);


