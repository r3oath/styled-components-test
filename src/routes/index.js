// @flow

import * as React from "react";
import * as ReactDOM from "react-dom";
import Loadable from "react-loadable";

const Loading = (props): React.Node | null => {
  if (props.pastDelay) {
    return <div>Loading...</div>;
  }

  return null;
};

export const Home = Loadable({
  loader: () => import("./home"),
  loading: Loading
});

export const View = Loadable({
  loader: () => import("./view"),
  loading: Loading
});
