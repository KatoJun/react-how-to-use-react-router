import { Switch, Route } from "react-router-dom";
import { Home } from "../Home";
import { Page2 } from "../Page2";
import { page1Routes } from "./Page1Routes";

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
      ></Route>
      <Route path="/page2">
        <Page2 />
      </Route>
    </Switch>
  );
};
