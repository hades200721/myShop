import {IProduct} from "../interface";

const RANDOM_PRODUCT: Array<IProduct> = [
    {
        description: 'underwear for men',
        id: 1111,
        price: 24,
        title: 'EasyFeed automatic feeder for fish',
        thumbnail: 'https://basket-12.wbbasket.ru/vol1678/part167836/167836365/images/c516x688/1.webp',
    },
    {
        description: 'world of sound',
        id: 1112,
        price: 53,
        title: 'Earphones',
        thumbnail: 'https://basket-10.wbbasket.ru/vol1512/part151264/151264534/images/c516x688/1.webp',
    },
    {
        description: 'Galtex size 50x50',
        id: 1113,
        price: 11,
        title: 'Pillow for a good sleep',
        thumbnail: 'https://basket-10.wbbasket.ru/vol1488/part148825/148825454/images/c516x688/1.webp',
    },
    {
        description: 'package of 5 boxer underwear',
        id: 1114,
        price: 25,
        title: 'Brand boxer',
        thumbnail: 'https://basket-12.wbbasket.ru/vol1767/part176792/176792502/images/c516x688/1.webp',
    },
    {
        description: 'Protection from sun',
        id: 1115,
        price: 5,
        title: 'Garnier',
        thumbnail: 'https://basket-01.wbbasket.ru/vol29/part2915/2915230/images/c516x688/1.webp',
    },
    {
        description: 'White t-shirt for men',
        id: 1116,
        price: 30,
        title: 'T-Shirt',
        thumbnail: 'https://basket-01.wbbasket.ru/vol103/part10302/10302970/images/c516x688/1.webp',
    },
    {
        description: 'Orthopedic insoles for shoes and sneakers for men and women',
        id: 1117,
        price: 11,
        title: 'D&K - quality and comfort',
        thumbnail: 'https://basket-14.wbbasket.ru/vol2092/part209200/209200599/images/c516x688/1.webp',
    },
    {
        description: 'package of 5 boxer underwear',
        id: 1118,
        price: 25,
        title: 'Brand boxer',
        thumbnail: 'https://basket-12.wbbasket.ru/vol1767/part176792/176792502/images/c516x688/1.webp',
    },
    {
        description: 'Protection from sun',
        id: 1119,
        price: 4,
        title: 'Garnier',
        thumbnail: 'https://basket-01.wbbasket.ru/vol29/part2915/2915230/images/c516x688/1.webp',
    },
    {
        description: 'White t-shirt for men',
        id: 1120,
        price: 23,
        title: 'T-Shirt',
        thumbnail: 'https://basket-01.wbbasket.ru/vol103/part10302/10302970/images/c516x688/1.webp',
    },
    {
        description: 'Orthopedic insoles for shoes and sneakers for men and women',
        id: 1121,
        price: 74,
        title: 'D&K - quality and comfort',
        thumbnail: 'https://basket-14.wbbasket.ru/vol2092/part209200/209200599/images/c516x688/1.webp',
    },
    {
        description: 'White t-shirt for men',
        id: 1122,
        price: 4,
        title: 'T-Shirt',
        thumbnail: 'https://basket-01.wbbasket.ru/vol103/part10302/10302970/images/c516x688/1.webp',
    },
    {
        description: 'Orthopedic insoles for shoes and sneakers for men and women',
        id: 1123,
        price: 45,
        title: 'D&K - quality and comfort',
        thumbnail: 'https://basket-14.wbbasket.ru/vol2092/part209200/209200599/images/c516x688/1.webp',
    }
];

export async function fetchProducts(): Promise<IProduct[]> {
    return RANDOM_PRODUCT;
}
