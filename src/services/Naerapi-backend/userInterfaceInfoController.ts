// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addUserInterfaceInfo POST /api/userInterfaceInfoInfo/add */
export async function addUserInterfaceInfoUsingPost(
  body: API.UserInterfaceInfoAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponselong>('/api/userInterfaceInfoInfo/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteUserInterfaceInfo POST /api/userInterfaceInfoInfo/delete */
export async function deleteUserInterfaceInfoUsingPost(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/userInterfaceInfoInfo/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getUserInterfaceInfoById GET /api/userInterfaceInfoInfo/get */
export async function getUserInterfaceInfoByIdUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getUserInterfaceInfoByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseUserInterfaceInfo>('/api/userInterfaceInfoInfo/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserInterfaceInfo GET /api/userInterfaceInfoInfo/list */
export async function listUserInterfaceInfoUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserInterfaceInfoUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListUserInterfaceInfo>('/api/userInterfaceInfoInfo/list', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listUserInterfaceInfoByPage GET /api/userInterfaceInfoInfo/list/page */
export async function listUserInterfaceInfoByPageUsingGet(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.listUserInterfaceInfoByPageUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageUserInterfaceInfo>('/api/userInterfaceInfoInfo/list/page', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** payInterface POST /api/userInterfaceInfoInfo/payInterface */
export async function payInterfaceUsingPost(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.payInterfaceUsingPOSTParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseobject>('/api/userInterfaceInfoInfo/payInterface', {
    method: 'POST',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** selfInterfaceData GET /api/userInterfaceInfoInfo/selfInterfaceData */
export async function selfInterfaceDataUsingGet(options?: { [key: string]: any }) {
  return request<API.BaseResponseListSelfInterfaceDateVo>(
    '/api/userInterfaceInfoInfo/selfInterfaceData',
    {
      method: 'GET',
      ...(options || {}),
    },
  );
}

/** updateUserInterfaceInfo POST /api/userInterfaceInfoInfo/update */
export async function updateUserInterfaceInfoUsingPost(
  body: API.UserInterfaceInfoUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseboolean>('/api/userInterfaceInfoInfo/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
