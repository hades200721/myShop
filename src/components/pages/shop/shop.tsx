import {SideBar} from './sideBar';
import {Body} from './body/body';
import {fetchProducts} from '../../../api/product';
import {StyledPage} from './style';

export const Shop = () => {
    return (
        <StyledPage>
            <SideBar />
            <Body />
        </StyledPage>
    );
};

export async function shopLoader() {
    // fetch to data goes here
  return await fetchProducts().then((response) => {
      return response;
    }).catch((errorCode: string) => {
      console.error(errorCode);
    });
}

