const callContainer = (path, data, callback, errCallback, method='GET') => {
    wx.cloud.callContainer({
        "config": {
          "env": "prod-9ghqrwafb90e55bd"
        },
        "path": path,
        "header": {
          "X-WX-SERVICE": "springboot-65ev",
          "content-type": "application/json"
        },
        "method": method,
        "data": data,
        "success": res => {
            if (callback) {
                callback(res)
            }
        },
        "fail": err => {
            if (errCallback) {
                errCallback(err)
            }
        }
      })
}

export const getCount = (callback, errCallback) => {
    callContainer('/api/count', '', callback, errCallback)
}

export const postCount = (data, callback, errCallback) => {
    callContainer('/api/count', data, callback, errCallback, 'POST')
}