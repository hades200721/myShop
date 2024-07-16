import {Loader} from './loader/loader';
import {Error} from './error/error';
import {InvalidIP} from './invalidIP/invalidIP';
import {Valid as ValidIPData} from './valid/valid';
import {IIP} from '../../../../../interface';
import {isObject} from '../../../../../utils/global';
import {EMPTY_TIMEZONE, UNKNOWN_COUNTRY_FLAG} from '../../../../../constants';

export class AdditionalDataBuilder {

  static render(ip: IIP) {
    switch (true) {
      case ip.isLoading: {
        return <Loader />;
      }
      case ip.isError: {
        return <Error />;
      }
      case (!ip.isValidIP && !!ip.ip.length): {
        return <InvalidIP />;
      }
      case (isObject(ip.data.timezone) && isObject(ip.data.flag)): {
        return <ValidIPData
            flag={ip.data?.flag || UNKNOWN_COUNTRY_FLAG}
            timezone={ip.data.timezone || EMPTY_TIMEZONE}
        />;
      }
      default: {
        return <></>;
      }
    }
  }

}
