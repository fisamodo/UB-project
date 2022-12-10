import React from "react";
import { Route, Switch } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";

import { publicRoutes } from "./route-names";

function AppRouter() {
  return (
    <Switch>
      <Route path={publicRoutes.INDEX} component={IndexPage} />
    </Switch>
  );
}

export default AppRouter;
