import React from 'react'
import { Card, Space } from 'antd';
import { data } from '@/data';
import { Props } from './type';


export default function Page({ params }: Props) {
  const post = data.find(item => item.id === parseInt(params.id))
  
  return (
    <>
      <Space direction="vertical" size={16}>
        <Card title={post?.title} style={{ width: 300 }}>
          <p>{post?.body}</p>
        </Card>
      </Space>
    </>
  )
}