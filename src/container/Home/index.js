import React from "react";
import {
  observer,
  inject //注入数据
} from "mobx-react";

@inject("appState") @observer
class Home extends React.Component {
  componentDidMount() {
    // console.warn(s)
  }
  change = (event) => {
    var {
      appState
    } = this.props;
    appState.reName(event.target.value);
  }
  render() {
    const {
      appState
    } = this.props;
    return (
      <div>
        智库28
        <input type="text" onChange={this.change} />
        {appState.msg}
      </div>
    )
  }
}
export default Home;
