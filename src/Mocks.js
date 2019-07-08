import {
  GET_PRODUCT_ITEM_DETAILS,
  GET_PRODUCT_ITEMS_DETAILS,
  EDIT_CART_ITEM,
  EDIT_FOLLOW_ITEM,
  GET_CAR
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
          isAddToCart:true,
          isFollow:true
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
              'Najwyższej jakości, w pełni syntetyczny olej silnikowy do najnowszych samochodów benzynowych i Diesel. Olej dedykowany do najnowszych silników pojazdów grupy VW/Audi. Sprzedawca Petrostar. Oficjalna aprobata VW 504.00/507.00.',
            isAddToCart:false,
            isFollow:false
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
            more: faker.lorem.sentence(),
            isAddToCart:true,
            isFollow:true
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
            more: faker.lorem.sentence(),
            isAddToCart:false,
            isFollow:true
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
            more: faker.lorem.sentence(),
            isAddToCart:true,
            isFollow:false
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
            more: faker.lorem.sentence(),
            isAddToCart:true,
            isFollow:true
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
            more: faker.lorem.sentence(),
            isAddToCart:false,
            isFollow:false
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
            more: faker.lorem.sentence(),
            isAddToCart:false,
            isFollow:false
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
            more: faker.lorem.sentence(),
            isAddToCart:false,
            isFollow:false
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
            more: faker.lorem.sentence(),
            isAddToCart:false,
            isFollow:false
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
            more: null,
            isAddToCart:false,
            isFollow:false
          }
        ]
      }
    }
  },
  /////////////// EDIT_CART_ITEM ////////////////
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: false,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: true,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: false,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: true,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: false,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: true,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: false,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_CART_ITEM,
      variables: {
        isAddToCart: true,
      }
    },
    result: {
      data: {
        editCartItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
//////////////// EDIT_FOLLOW_ITEM //////////////
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: false,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: true,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: false,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: true,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: false,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: true,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: false,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: false,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
  {
    request: {
      query: EDIT_FOLLOW_ITEM,
      variables: {
        isFollow: true,
      }
    },
    result: {
      data: {
        editFollowItem: {
          isAddToCart: true,
          id: faker.random.number(),
          price: faker.commerce.price(),
          oldPrice: faker.commerce.price(),
          name: faker.lorem.words(),
          subname: faker.commerce.productAdjective(),
          description: faker.lorem.words(),
          value: faker.random.number(),
          discount: faker.random.number(),
          more: faker.lorem.sentence(),
          isFollow:true
        }
      }
    }
  },
///////// ALERTS ///////////////////
{
  request: {
    query: GET_CAR
  },
  result: {
    data: {
      car: {
        car: "MERCEDES S500 (8E2, B6) 1.8 T queattro, 140 PS, 103 kW"
      }
    }
  }
},
];

export default Mocks;
