import {
  observable, //观察者
  computed, //计算器
  // autorun, //监听更新
  action
} from 'mobx';

export default class AppState {
  @observable count = 0;
  @observable name = "pn";
  @computed get msg() {
    return `${this.name} say count is ${this.count}`
  }
  @action add() {
    this.count += 1;
  }
  @action reName(name) {
    this.name = name
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
