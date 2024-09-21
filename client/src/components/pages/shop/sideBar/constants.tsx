import {Checkbox} from '../../../filters/checkbox';

export const FILTERS_TXT = 'Filters';

export const FILTERS = [
  {
    component: <Checkbox
      options={[{key: 'one', name: 'One'}]}
      id={'delivery'} />,
    key: 'delivery',
    label: 'Delivery options & services',
  },
  {
    component: <Checkbox
      options={[{key: 'turkey', name: 'Turkey'}, {key: 'israel', name: 'Israel'}]}
      id={'shipping'}
     />,
    key: 'shipping',
    label: 'Shipping from',
  },
  {
    component: <Checkbox options={[{key: 'three', name: 'Three'}]} id={'price'} />,
    key: 'price',
    label: 'Price',
  },
];
