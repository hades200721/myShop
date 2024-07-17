import {useMemo} from 'react';
import {useLoaderData} from 'react-router-dom';
import {Product} from './product';
import {StyledBody} from './style';
import {IProduct} from "../../../../interface";

export const Body = () => {
    const data = useLoaderData();
    const productsListToRender = useMemo(() => {
        return data.map((product: IProduct) => <Product key={product.id} product={product}></Product>);
    }, [data]);

    return (
        <StyledBody>
            {productsListToRender}
        </StyledBody>
    );
}

