import { Content, Header, Page } from '@alita/flow';
import { useNavigate } from 'alita';
import { InfiniteScroll, List, SearchBar } from 'antd-mobile';
import React, { useEffect, useState } from 'react';
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
  const [count, setCount] = useState<number>(0);
  const [hasMore, setHasMore] = useState(true);
  const navigate = useNavigate();
  async function loadMore() {
    const append = await mockRequest();
    setData((val) => [...val, ...append]);
    setHasMore(append.length > 0);
  }
  useEffect(() => {
    loadMore();
  }, []);
  return (
    <Page>
      <Header>
        <SearchBar placeholder="请输入内容" />
      </Header>
      <Content>
        <List>
          {data.map((item, index) => (
            <List.Item key={index} onClick={() => navigate(-1)}>
              {item}
            </List.Item>
          ))}
        </List>
        <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
      </Content>
    </Page>
  );
};
