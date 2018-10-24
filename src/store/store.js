import AppStateClass, { AppState2 } from './appState';
// import  from './appState';

export const AppState = AppStateClass;
export const AppCopy = AppState2


const AppStatess = (init = {}) => {
  return {
    appState: new AppState(init.appState),
    appCopy: new AppCopy(init.appCopy)
  }
}
export default AppStatess
//专给服务器渲染使用
export const createStoreMap = () => {
  return {
    appState: new AppState(),
    AppCopy: new AppCopy()
  }
}
