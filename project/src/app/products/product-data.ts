import { Product } from './product';

export class ProductData {
  static products: Product[] = [
    {
      id: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      description: 'Leaf rake with 48-inch wooden handle',
      price: 19.95,
      quantityInStock: 15,
      hasReviews: true,
    },
    {
      id: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      quantityInStock: 2,
      hasReviews: true,
    },
    {
      id: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      description: 'Curved claw steel hammer',
      price: 8.9,
      quantityInStock: 8,
      hasReviews: true,
    },
    {
      id: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      quantityInStock: 6,
      hasReviews: false,
    },
    {
      id: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      description: 'Standard two-button video game controller',
      price: 35.95,
      quantityInStock: 12,
      hasReviews: true,
    },
    {
      id: 11,
      productName: 'Video Game Controller11',
      productCode: 'GMG-0042',
      description: 'Standard two-button video game controller',
      price: 15.95,
      quantityInStock: 12,
      hasReviews: true,
    },
    {
      id: 12,
      productName: 'Video Game Controller12',
      productCode: 'GMG-0042',
      description: 'Standard two-button video game controller',
      price: 32.95,
      quantityInStock: 102,
      hasReviews: true,
    },
  ];
}
