import { AsyncStorage } from 'react-native'

export default class Request {
  /**
   * 获取数据，优先获取本地数据，如果无本地数据或本地数据过期则获取网络数据
   * @param {*} url 
   */
  fetchData(url, flag) {
    return new Promise((resolve, reject) => {
      this.fetchLocalData(url).then((wrapData) => {
        if (wrapData && Request.checkTimestampValid(wrapData.timestamp)) {
          resolve(wrapData)
        } else {
          this.fetchNetData(url, flag).then(data => {
            resolve(this._wrapData(data))
          }).catch(err => {
            reject(err)
          })
        }
      }).catch(error => {
        this.fetchNetData(url, flag).then(data => {
          resolve(this._wrapData(data))
        }).catch(err => {
          reject(err)
          console.log(err)
        })
        console.log("error:" + error)
      })
    })
  }
  /**
   * 加载本地数据
   * @param {*} url 
   */
  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      // console.log(AsyncStorage.getItem(url))
      AsyncStorage.getItem(url, (err, result) => {
        if (!err) {
          try {
            resolve(JSON.parse(result))
          } catch (e) {
            reject(e)
            console.error(e)
          }
        } else {
          reject(err)
          console.error(err)
        }
      })
    })
  }
  /**
   * 获取网络数据
   * @param {*} url 
   */
  fetchNetData(url, flag) {
    return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Network response was not ok')
        })
        .then(res => {
          this.saveData(url, res)
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  /**
 * 保存数据
 * @param {*} url 
 * @param {*} data 
 * @param {*} callback 
 */
  saveData(url, data, callback) {
    if (!data || !url) return
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback)

  }
  /**
   * 合并时间戳
   * @param {*} data 
   */
  _wrapData(data) {
    return {
      data,
      timestamp: new Date().getTime()
    }
  }
  /**
   * 时间戳有效期校验
   * @param {*} timestamp 
   */
  static checkTimestampValid(timestamp) {
    const currentTime = new Date()
    const targetTime = new Date()
    targetTime.setTime(timestamp)
    if (currentTime.getMonth() !== targetTime.getMonth()) return false;
    if (currentTime.getDate() !== targetTime.getDate()) return false;
    if (currentTime.getHours() - targetTime.getHours() > 4) return false;
    return true
  }
}
