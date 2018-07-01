import originJSONP from 'jsonp'

export default function jsonp (url, data, opts) {

  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data);

  return new Promise((resolve, reject) => {
    originJSONP(url, opts, (err, data) => {
      if (!err) {
        resolve(data);
      } else {
        reject(err);
      }
    })
  })
}

export function param (data) {
  let url = '';
  for (const k in data) {
    let val = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(val)}`
  }
  return url ? url.substring(1) : '';
}