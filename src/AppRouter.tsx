import React from "react";
import { Route, Switch } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage/IndexPage";
import { SuccessPage } from "./pages/SuccessPage";

import { publicRoutes } from "./route-names";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={publicRoutes.INDEX} component={IndexPage} />
      <Route path={publicRoutes.SUCCESS} component={SuccessPage} />
    </Switch>
  );
}

export default AppRouter;
