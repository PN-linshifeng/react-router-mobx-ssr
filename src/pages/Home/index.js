import React from "react";
import {
  observer,
  inject //注入数据
} from "mobx-react";
import Helmet from 'react-helmet';


@inject((stores) => {
  return {
    appState: stores.appState,
    newsStore: stores.newsStore
  }
}) @observer
class Home extends React.Component {
  componentDidMount() {
    console.log("abc")
    const { newsStore } = this.props
    newsStore.queryNews().then(() => {
      // console.log(data)
    }).catch(err => {
      console.log(err) // eslint-disable-line
    });

    // console.warn(s)
  }

  change = (event) => {
    var {
      appState
    } = this.props;
    appState.reName(event.target.value);
  }
  bootstrap() {
    var { appState, newsStore } = this.props
    console.log("bootstrap")
    new Promise((resolve) => {
      setTimeout(() => {
        appState.count = 100;
        resolve(true)
      })
    })
    return new Promise((resolve, reject) => {
      newsStore.queryNews().then(() => {
        // newsStore.news = "abc"
        resolve()
      }).catch(err => {
        reject(err) // eslint-disable-line
      });
    })
  }

  render() {
    const {
      appState,
      newsStore
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>title智库28</title>
        </Helmet>
        智库28---
        <input type="text" onChange={this.change} />
        {appState.msg}
        <p>{JSON.stringify(newsStore.news)}</p>
      </div>
    )
  }
}
export default Home;
