import {
  observable,
  computed, // eslint-disable-line
  action,
  extendObservable // eslint-disable-line
} from 'mobx';
import { get } from '../utils/request'

// class News {
//   constructor(data) {
//     extendObservable(this, data); // 使用mobx的特性
//   }
//   @observable loading = false;
// }
class NewsStore {
  @observable news
  @observable loading

  constructor({ loading = false, news = '' } = {}) {
    this.loading = loading
    this.news = news
  }

  @computed get msg() {
    return `ssss`
  }

  @action queryNews({ jsoncallback = 'news', isTc = false, cat = 38, ln = 'zh-cn', num = 1, onDate = '', endDate = '', keywords = '' } = {}) {
    // jsoncallback=news&cat=38&ln=zh-cn&isTc=false&startAt=1&num=20&onDate=&endDate=&keywords=
    return new Promise((resolve, reject) => {
      get('https://content.aetoscg.asia/api/getNewsList.php', {
        jsoncallback,
        isTc,
        cat,
        ln,
        num,
        onDate,
        endDate,
        keywords
      }).then((resp) => {
        this.news = resp.data
        console.log(this.news)
        resolve(resp.data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  toJson() {

    return {
      loading: this.loading,
      news: this.news
    }
  }
}
export default NewsStore;
