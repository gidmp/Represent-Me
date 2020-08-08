import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import LandingPage from "../../pages/HomePage";

export default function AuthenticatedRoute({
  component: landingpage,
  appProps,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        appProps.isAuthenticated ? (
          <LandingPage {...props} {...appProps} />
        ) : (
          <Redirect to="/landingpage" />
        )
      }
    />
  );
}
