import { InfiniteScroll, List } from 'antd-mobile';
import React, { useState } from 'react';
import { history } from 'umi';

let count = 0;

async function mockRequest() {
  console.log('mockRequest');
  if (count >= 5) {
    return [];
  }
  count++;
  return [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
  ];
}

export default () => {
  const [data, setData] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  async function loadMore() {
    const append = await mockRequest();
    setData(val => [...val, ...append]);
    setHasMore(append.length > 0);
  }

  return (
    <>
      <List>
        {data.map((item, index) => (
          <List.Item key={index} onClick={() => history.goBack()}>{item}</List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </>
  )
}
