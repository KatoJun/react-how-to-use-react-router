import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => {
              const { path, exact, children } = route;
              return (
                <Route key={path} exact={exact} path={`${url}${path}`}>
                  {children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => {
              const { path, exact, children } = route;
              return (
                <Route key={path} exact={exact} path={`${url}${path}`}>
                  {children}
                </Route>
              );
            })}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
