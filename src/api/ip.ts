import {IP_GEOLOCATION_ENDPOINT} from '../constants';
import {ITimeZoneProps} from '../components/common/time/interface';

type IResponseProps = {
    flag: {
        png: string;
        svg: string;
    }
    timezone: ITimeZoneProps;
};

type IRejectProps = {
    error: {
        message: string;
        code: string;
        details: unknown;
    }
};

const IP_ADDRESS_KEY = 'ip_address';
export async function fetchIpAddress(ipAddress: string): Promise<IResponseProps | IRejectProps> {
    const geoLocationByIpEndPoint = `${IP_GEOLOCATION_ENDPOINT}&${IP_ADDRESS_KEY}=${ipAddress}`;
    const res = await fetch(geoLocationByIpEndPoint);
    const data = await res.json();
    if (data.error) {
        throw(data.error.code);
    }
    const {flag, timezone} = data;
    const {png, svg} = flag;
    const {current_time, gmt_offset} = timezone;
    return {
        flag: {
            png,
            svg,
        },
        timezone: {
            current_time,
            gmt_offset,
        }
    };
}