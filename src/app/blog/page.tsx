'use client'
import React from 'react';
import { Avatar, List } from 'antd';
import { data } from '@/data';

const Home: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta className='!items-center'
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href={ `/blog/${item.id}`}>{item.title}</a>}
        />
      </List.Item>
    )}
  />
);

export default Home;