// @flow

import URLSearchParams from 'url-search-params';

type RequestParams = {
  url: string,
  token?: string,
  parameters?: Object
};
type MethodType = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' ;

function createHeaders(token: ?string) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  headers.append('Accept', 'application/json,');
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }
  return headers;
}

type doRequestParams = { url: string, method: MethodType, body?: ?string, token?: string };
async function doRequest(params: doRequestParams): Promise<Response> {
  const { url, method, body, token } = params;
  const request = new Request(`https://mstdn.jp/api/v1/${url}`, {
    headers: createHeaders(token),
    method,
    body
  });
  try {
    const response = await fetch(request);
    if (!(response.status >= 200 && response.status < 400)) {
      return Promise.reject(response);
    }
    return response;
  } catch (e) {
    return Promise.reject(e);
  }
}

function get(params: RequestParams): Promise<*> {
  const searchParams = new URLSearchParams();
  const parameters = params.parameters || {};
  Object.keys(parameters).forEach((key) => {
    const searchKey = key || '';
    const searchValue = parameters[key] || '';
    searchParams.append(searchKey, searchValue);
  });
  const url = searchParams.toString() ? `${params.url}?${searchParams.toString()}` : params.url;
  return doRequest({ url: url || '', method: 'GET', body: null, token: params.token });
}

async function post(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'POST', body, token: params.token });
}

async function put(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'PUT', body, token: params.token });
}

async function patch(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'PATCH', body, token: params.token });
}

async function destroy(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'DELETE', body, token: params.token });
}

export default { get, post, put, patch, delete: destroy };
