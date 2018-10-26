import {
  observable, //观察者
  computed, //计算器
  // autorun, //监听更新
  action
} from 'mobx';

export default class AppState {
  constructor({ count, name } = { count: 0, name: 'pn' }) {
    this.count = count;
    this.name = name;
  }
  @observable count;
  @observable name;
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1;
  }
  @action reName(name) {
    this.name = name
  }

  //用于服务端渲染生成前后端同构数据
  toJson() {
    console.log("toJson")
    console.log(this.count)
    return {
      count: this.count,
      name: this.name
    }
  }
}



// const appState = new AppState();
// autorun(() => {
//   console.log(appState.msg)
// })

// setInterval(() => {
//   appState.add()
// }, 10000)
// export default appState;
