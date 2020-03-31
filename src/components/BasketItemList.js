import React, { useCallback } from 'react';
import BasketItem from './BasketItem';
import { useStore } from '../stores/indexStore';
import { useObserver } from 'mobx-react'; // 불러오기

const BasketItemList = () => {
  const { MarketStore } = useStore();

  const items = MarketStore.selectedItems;

  const onTake = useCallback(
    name => {
      MarketStore.take(name);
    },
    [MarketStore]
  );

  const itemList = items.map(item => (
    <BasketItem
      name={item.name}
      price={item.price}
      count={item.count}
      key={item.name}
      onTake={onTake}
    />
  ));
  return useObserver(() => (
    <div>
      {itemList}
      <hr />
      <p>
        <b>총합: </b> {MarketStore.total}원
      </p>
    </div>
  ));
};

export default BasketItemList;
