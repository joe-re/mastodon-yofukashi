// @flow

import URLSearchParams from 'url-search-params';

type RequestParams = {
  url: string,
  accessToken?: string,
  parameters?: Object
};
type MethodType = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' ;

function createHeaders(accessToken: ?string) {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json; charset=utf-8');
  headers.append('Accept', 'application/json,');
  if (accessToken) {
    headers.append('Authorization', `Bearer ${accessToken}`);
  }
  return headers;
}

type doRequestParams = { url: string, method: MethodType, body?: ?string, accessToken?: string };
async function doRequest(params: doRequestParams): Promise<Response> {
  const { url, method, body, accessToken } = params;
  const request = new Request(url, { headers: createHeaders(accessToken), method, body });
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

export function buildQueryURL(params: RequestParams) {
  const searchParams = new URLSearchParams();
  const parameters = params.parameters || {};
  Object.keys(parameters).forEach((key) => {
    const searchKey = key || '';
    const searchValue = parameters[key] || '';
    searchParams.append(searchKey, searchValue);
  });
  const url = searchParams.toString() ? `${params.url}?${searchParams.toString()}` : params.url;
  return url;
}

function get(params: RequestParams): Promise<*> {
  return doRequest({ url: buildQueryURL(params), method: 'GET', body: null, accessToken: params.accessToken });
}

async function post(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'POST', body, accessToken: params.accessToken });
}

async function put(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'PUT', body, accessToken: params.accessToken });
}

async function patch(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'PATCH', body, accessToken: params.accessToken });
}

async function destroy(params: RequestParams): Promise<*> {
  const body = params.parameters ? JSON.stringify(params.parameters) : null;
  return doRequest({ url: params.url, method: 'DELETE', body, accessToken: params.accessToken });
}

export default { get, post, put, patch, delete: destroy };
