import { PageContainer } from '@ant-design/pro-components';
import { List, message } from 'antd';
import React,{ useEffect, useState } from 'react';
import { listInterfaceInfoByPageUsingGet } from '@/services/Naerapi-backend/interfaceInfoController';

/**
 * 主页
 */
const Index: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState<API.InterfaceInfo[]>([]);
  const [total,setTotal] = useState<number>(0);

  const loadData = async (current:number = 1,pageSize:number = 5) =>{
    setLoading(true);
    try {
      const res = await listInterfaceInfoByPageUsingGet({
          current,
          pageSize,
      });
      setList(res?.data?.records ?? []);
      setTotal(res?.data?.total ?? 0);
    } catch (error:any) {
      message.error('请求失败，'+ error.message)
    }
    

    setLoading(false);

  }

  useEffect(() => {
    loadData();
  }, []);
  return (
    <PageContainer title="查看接口文档">

    </PageContainer>
  );
};



export default Index;
