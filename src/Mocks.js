import {
  GET_PRODUCT_ITEM_DETAILS,
  GET_PRODUCT_ITEMS_DETAILS
} from './pages/HomePage/HomePage.query';
import faker from 'faker';

export const Mocks = [
  {
    request: {
      query: GET_PRODUCT_ITEM_DETAILS
    },
    result: {
      data: {
        product: {
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
        }
      }
    }
  },
  {
    request: {
      query: GET_PRODUCT_ITEMS_DETAILS
    },
    result: {
      data: {
        products: [
          {
            id: '1',
            name: 'Havoline Magnetic',
            subname: 'EVO 15W-40',
            description: 'Olej przekładniowy',
            price: '149,00 zł',
            oldPrice: '189,00 zł',
            discount: '-15%',
            value: '5l',
            more:
              'Najwyższej jakości, w pełni syntetyczny olej silnikowy do najnowszych samochodów benzynowych i Diesel. Olej dedykowany do najnowszych silników pojazdów grupy VW/Audi. Sprzedawca Petrostar. Oficjalna aprobata VW 504.00/507.00.'
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: null,
            name: faker.lorem.words(),
            subname: faker.commerce.productAdjective(),
            description: faker.lorem.words(),
            value: faker.random.number(),
            discount: faker.random.number(),
            more: faker.lorem.sentence()
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: faker.commerce.price(),
            name: faker.lorem.words(),
            subname: faker.commerce.productAdjective(),
            description: faker.lorem.words(),
            value: faker.random.number(),
            discount: null,
            more: faker.lorem.sentence()
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: null,
            name: faker.lorem.words(),
            subname: faker.commerce.productAdjective(),
            description: faker.lorem.words(),
            value: faker.random.number(),
            discount: null,
            more: faker.lorem.sentence()
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: faker.commerce.price(),
            name: null,
            subname: faker.commerce.productAdjective(),
            description: faker.lorem.words(),
            value: faker.random.number(),
            discount: faker.random.number(),
            more: faker.lorem.sentence()
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: faker.commerce.price(),
            name: faker.lorem.words(),
            subname: null,
            description: faker.lorem.words(),
            value: faker.random.number(),
            discount: faker.random.number(),
            more: faker.lorem.sentence()
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: faker.commerce.price(),
            name: faker.lorem.words(),
            subname: faker.commerce.productAdjective(),
            description: null,
            value: faker.random.number(),
            discount: faker.random.number(),
            more: faker.lorem.sentence()
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: faker.commerce.price(),
            name: faker.lorem.words(),
            subname: faker.commerce.productAdjective(),
            description: faker.lorem.words(),
            value: null,
            discount: faker.random.number(),
            more: faker.lorem.sentence()
          },
          {
            id: faker.random.number(),
            price: faker.commerce.price(),
            oldPrice: faker.commerce.price(),
            name: faker.lorem.words(),
            subname: faker.commerce.productAdjective(),
            description: faker.lorem.words(),
            value: faker.random.number(),
            discount: faker.random.number(),
            more: faker.lorem.sentence()
          },
          {
            id: null,
            price: null,
            oldPrice: null,
            name: null,
            subname: null,
            description: null,
            value: null,
            discount: null,
            more: null
          }
        ]
      }
    }
  }
];

export default Mocks;
