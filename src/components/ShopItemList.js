import React, { useCallback } from 'react';
import ShopItem from './ShopItem';
import { useStore } from '../stores/indexStore';
import { useObserver } from 'mobx-react'; // 불러오기

const items = [
  {
    name: '생수',
    price: 850,
  },
  {
    name: '신라면',
    price: 900,
  },
  {
    name: '포카칩',
    price: 1500,
  },
  {
    name: '새우깡',
    price: 1000,
  },
];

// **** Put 함수 추가됨
const ShopItemList = () => {
  const { MarketStore } = useStore();

  const onPut = useCallback(
    (name, price) => {
      MarketStore.put(name, price);
    },
    [MarketStore]
  );

  const itemList = items.map(item => (
    <ShopItem {...item} key={item.name} onPut={onPut} />
  ));
  return useObserver(() => <div>{itemList}</div>);
};

export default ShopItemList;
