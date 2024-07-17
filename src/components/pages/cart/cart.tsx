import React, {useMemo} from 'react';
import {rand, sleep} from '../../../routing/utils';
import {Product} from '../shop/body/product';
import {IProduct} from '../../../interface';
import {useSelector} from 'react-redux';
import {RootState} from '../../../store/store';

export const Cart = React.memo(() => {
    const cartProducts = useSelector<RootState, IProduct[]>((state) => state.cart);
    const productsListToRender = useMemo(() => {
        return cartProducts.map((product: IProduct) => <Product key={product.id} product={product}></Product>);
    }, [cartProducts]);

    return (
        <div>
            {productsListToRender}
        </div>
    );
});

export async function cartLoader() {
    // fetch to data goes here
    await sleep();
    return {data: `cart loader - random value ${rand()}`};
}

