import React from "react";
import {
  observer,
  inject //注入数据
} from "mobx-react";
import Helmet from 'react-helmet';

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
        <Helmet>
          <title>智库28888</title>
        </Helmet>
        智库28
        <input type="text" onChange={this.change} />
        {appState.msg}
      </div>
    )
  }
}
export default Home;
