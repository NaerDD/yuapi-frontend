// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** ListTopInvokeInterfaceInfo GET /api/analysis/top/interface/invoke */
export async function listTopInvokeInterfaceInfoUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListInterfaceVo>('/api/analysis/top/interface/invoke', {
    method: 'GET',
    ...(options || {}),
  });
}
