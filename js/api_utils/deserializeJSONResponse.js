// @flow

export default async function deserializeJSONResponse<T>(
  promise: Promise<*>, cb?: Function
): Promise<T> {
  try {
    const response = await promise;
    debugger;
    const json = await response.json().catch(() => null);
    if (cb) {
      return cb(json);
    }
    return json;
  } catch (e) {
    if (e.json) {
      const errResponse = await e.json();
      return Promise.reject(errResponse);
    }
    return Promise.reject(e);
  }
}