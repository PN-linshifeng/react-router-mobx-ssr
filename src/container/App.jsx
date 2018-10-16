import React from "react";
import {
  Link
} from "react-router-dom";
import Routes from "../config/router.jsx";

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return [
      <div key="s">
        <Link to="/">首页</Link> |
        <Link to="404">404</Link>
      </div>,
      <Routes key="ss"></Routes>
    ]
  }
}

export default App;
