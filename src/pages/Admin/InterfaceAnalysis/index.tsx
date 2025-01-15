import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import { listTopInvokeInterfaceInfoUsingGet } from '@/services/Naerapi-backend/analysisController';
import { PageContainer } from '@ant-design/pro-components';

const InterfaceAnalysis: React.FC = () => {

  const [data,setData] = useState<API.InterfaceVo[]>([]); 
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    try {
      listTopInvokeInterfaceInfoUsingGet().then(res=>{
        if(res.data){
          setData(res.data);
        }
      })
    } catch (e:any) {
      
    }
  },[]);

  const chartData = data.map(item =>{
    return{
      value :item.totalNum,
      name :item.name
    }
  });

  const option = {
    title : {
      text: '调用次数最多的接口TOP3',
      left:'center'
    },
    tooltip : {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series : [
      {
      name: '访问来源',
      type: 'pie',
      radius : '55%',
      data:chartData,
      itemStyle: {
        emphasis: {
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
      }
    ]
  };

return(
  <PageContainer>
    <ReactECharts loadingOption={{
      showLoading:loading
    }} option={option} />
  </PageContainer>
)

};

export default InterfaceAnalysis;