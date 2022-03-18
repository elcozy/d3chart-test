import React, { Component } from "react";
import { typography } from "./utils/typography";
import { Dashboard } from "./dc/dashboard";
import { Grid } from "react-flexbox-grid";
import { css } from "glamor";

class App extends Component {
  render() {
    const style = css({
      background: `#ddd`,
    });
    typography.injectStyles();
    return (
      <div {...style}>
        <Grid>
          <Dashboard />
        </Grid>
      </div>
    );
  }
}

export default App;
