import axios from 'axios';
import {IProduct} from '../interface';

const RANDOM_PRODUCT: Array<IProduct> = [
  {
    description: 'underwear for men',
    id: 1111,
    price: 24,
    title: 'EasyFeed automatic feeder for fish',
    image: 'https://basket-12.wbbasket.ru/vol1678/part167836/167836365/images/c516x688/1.webp',
  },
  {
    description: 'world of sound',
    id: 1112,
    price: 53,
    title: 'Earphones',
    image: 'https://basket-10.wbbasket.ru/vol1512/part151264/151264534/images/c516x688/1.webp',
  },
  {
    description: 'Galtex size 50x50',
    id: 1113,
    price: 11,
    title: 'Pillow for a good sleep',
    image: 'https://basket-10.wbbasket.ru/vol1488/part148825/148825454/images/c516x688/1.webp',
  },
  {
    description: 'package of 5 boxer underwear',
    id: 1114,
    price: 25,
    title: 'Brand boxer',
    image: 'https://basket-12.wbbasket.ru/vol1767/part176792/176792502/images/c516x688/1.webp',
  },
  {
    description: 'Protection from sun',
    id: 1115,
    price: 5,
    title: 'Garnier',
    image: 'https://basket-01.wbbasket.ru/vol29/part2915/2915230/images/c516x688/1.webp',
  },
  {
    description: 'White t-shirt for men',
    id: 1116,
    price: 30,
    title: 'T-Shirt',
    image: 'https://basket-01.wbbasket.ru/vol103/part10302/10302970/images/c516x688/1.webp',
  },
  {
    description: 'Orthopedic insoles for shoes and sneakers for men and women',
    id: 1117,
    price: 11,
    title: 'D&K - quality and comfort',
    image: 'https://basket-14.wbbasket.ru/vol2092/part209200/209200599/images/c516x688/1.webp',
  },
  {
    description: 'Tactical assault vest with armor plates BR5 1115',
    id: 1118,
    price: 25,
    title: 'Army vest',
    image: 'https://basket-15.wbbasket.ru/vol2358/part235841/235841448/images/c516x688/1.webp',
  },
  {
    description: 'Balaclava Moto helmet',
    id: 1119,
    price: 4,
    title: 'cap',
    image: 'https://basket-13.wbbasket.ru/vol2015/part201531/201531381/images/c516x688/1.webp',
  },
  {
    description: 'Percussion electric vibration massager\n',
    id: 1120,
    price: 23,
    title: 'Massage maker',
    image: 'https://basket-13.wbbasket.ru/vol2003/part200381/200381364/images/c516x688/1.webp',
  },
  {
    description: 'sAtori - professional massage tool for all body',
    id: 1121,
    price: 74,
    title: 'Vibroplatforma for weight loss cardio stepper simulatort',
    image: 'https://basket-15.wbbasket.ru/vol2206/part220661/220661603/images/c516x688/1.webp',
  },
  {
    description: 'Liquid sports magnesium for pole pole Hard 100 ml',
    id: 1122,
    price: 4,
    title: 'Liquid chalk',
    image: 'https://basket-02.wbbasket.ru/vol151/part15109/15109267/images/c516x688/1.webp',
  },
  {
    description: 'Motorcycle turtle motorcycle jacket for motocross motorcycle protection',
    id: 1123,
    price: 45,
    title: 'Motor jacket',
    image: 'https://basket-12.wbbasket.ru/vol1808/part180898/180898667/images/c516x688/1.webp',
  },
];

export const NO_PRODUCT_FOUND: IProduct = {
  description: 'no item with such id :(',
  id: -1,
  price: 0,
  title: 'No such item found',
  image: 'no image',
};

export async function fetchProducts(): Promise<IProduct[]> {
  try {
    const response = await axios.get('http://localhost:3001/product');
    return (response.data);
  } catch (error) {
    return RANDOM_PRODUCT;
  }
}

export async function fetchProduct(id: number): Promise<IProduct> {
  try {
    const response = await axios.get(`http://localhost:3001/product/${id}`);
    return (response.data);
  } catch (error) {
    return RANDOM_PRODUCT.find(product => product.id === id) || NO_PRODUCT_FOUND;
  }
}
