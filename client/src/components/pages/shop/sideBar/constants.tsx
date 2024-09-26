import {Checkbox, Range} from '../../../filters';

export const FILTERS_TXT = 'Filters';

export const FILTERS = {
    delivery: {
      props: {
        options: [{key: 'one', name: 'One'}],
        id: 'delivery',
      },
      label: 'Delivery options & services',
      type: 'checkbox',
    },
    shipping: {
      props: {
        options: [{key: 'turkey', name: 'Turkey'}, {key: 'israel', name: 'Israel'}],
        id: 'shipping',
      },
      key: 'shipping',
      label: 'Shipping from',
      type: 'checkbox',
    },
    price: {
      props: {
        id: 'price',
      },
      key: 'price',
      label: 'Price',
      type: 'range',
    },
};

export const componentByType = (type: string, props: any) => {
  switch (type) {
    case 'checkbox': {
      return <Checkbox {...props} />;
    }
    default: {
      return <Range id={'price'} {...props} />;
    }
  }
}
