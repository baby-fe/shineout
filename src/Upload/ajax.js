function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest()
  if ('withCredentials' in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true)
  } else if (typeof XDomainRequest !== 'undefined') {
    // XDomainRequest for IE.
    xhr = new XDomainRequest()
    xhr.open(method, url)
  } else {
    // CORS not supported.
    xhr = null
  }
  return xhr
}

export default function (args) {
  const {
    url, name, cors, file, onProgress, onLoad, onError, withCredentials, params = {},
  } = args

  const data = new FormData()
  Object.keys(params).forEach((k) => {
    data.append(k, params[k])
  })

  data.append(name, file)

  const xhr = createCORSRequest('post', url, cors)
  xhr.withCredentials = withCredentials
  xhr.upload.addEventListener('progress', onProgress, false)
  xhr.onload = onLoad
  xhr.onerror = onError
  xhr.send(data)

  return xhr
}