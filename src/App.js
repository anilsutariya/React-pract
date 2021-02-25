import React, { Component, Fragment, lazy, Suspense } from "react";
import "./index.css";

const AeroplaneLogo = lazy(() => import("./Components/infoComponents"));

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showLogo: false
    };
  }

  onClick = () => {
    this.setState({ showLogo: !this.state.showLogo });
  };

  render() {
    return (
      <div className="App">
        <h1>React.lazy()  &lt;React.Suspense &gt; Demo</h1>
        <div>
          <button onClick={this.onClick}>
            {this.state.showLogo && <Fragment>Click to Hide the Logo</Fragment>}
            {!this.state.showLogo && (
              <Fragment>Click to Show the Logo</Fragment>
            )}
          </button>
        </div>
        <hr />
        {this.state.showLogo && (
          <Suspense fallback={<div>Loading...</div>}>
            <AeroplaneLogo />
          </Suspense>
        )}
      </div>
    );
  }
}
