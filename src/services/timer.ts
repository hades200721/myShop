import {IIP} from '../interface';
import {isObject} from '../utils/global';

export class Timer {

    static shouldTickTimer(ip: IIP) {
        return !ip.isLoading && isObject(ip.data.timezone);
    }

    static updateCurrentTime(currentTime: string =  '00:00:00') {
        const currentTimeArr = currentTime.split(':');
        // SECONDS
        const secondsNum = (Number(currentTimeArr[2]) + 1) % 60;
        const minutesToAdd = (secondsNum === 0) ? 1 : 0;
        const seconds = secondsNum < 10 ? '0' + secondsNum : secondsNum.toString();
        // MINUTES
        const minutesNum = (Number(currentTimeArr[1]) + minutesToAdd) % 60;
        const hoursToAdd = (minutesNum === 0 && minutesToAdd) ? 1 : 0;
        const minutes = minutesNum < 10 ? '0' + minutesNum : minutesNum.toString();
        // HOURS
        const hoursNum = (Number(currentTimeArr[0]) + hoursToAdd) % 24;
        const hours = hoursNum < 10 ? '0' + hoursNum : hoursNum.toString();

        return `${hours}:${minutes}:${seconds}`;
    }
}
