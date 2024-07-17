import {IP_GEOLOCATION_ENDPOINT} from '../constants';
import {ITimeZoneProps} from '../components/common/time/interface';
import {IProduct} from "../interface";

type IResponseProps = {
    flag: {
        png: string;
        svg: string;
    }
    timezone: ITimeZoneProps;
};

const RANDOM_PRODUCT: Array<IProduct> = [
    {
        description: 'what ever goes here',
        id: 1111,
        price: 24,
        title: 'EasyFeed automatic feeder for fish',
        thumbnail: '',
    },
    {
        description: 'what ever goes here',
        id: 1112,
        price: 53,
        title: 'EasyFeed automatic feeder for fish',
        thumbnail: '',
    },
    {
        description: 'what ever goes here',
        id: 1113,
        price: 11,
        title: 'EasyFeed automatic feeder for fish',
        thumbnail: '',
    }
];

export async function fetchProducts(): Promise<IProduct[]> {
    // const geoLocationByIpEndPoint = `${IP_GEOLOCATION_ENDPOINT}&${IP_ADDRESS_KEY}=${ipAddress}`;
    // const res = await fetch(getProductsUrl);
    // const data = await res.json();
    // return data;
    return RANDOM_PRODUCT;
}