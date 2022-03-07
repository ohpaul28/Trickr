import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import PageNotFound from "./components/PageNotFound";
import PostPhoto from "./components/PostPhoto";
import Explore from "./components/Explore";
import EditComment from "./components/EditComment";
import EditPhoto from "./components/EditPhoto";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <Route path='/post'>
            <PostPhoto />
          </Route>
          <Route path='/explore'>
            <Explore />
          </Route>
          <Route path='/:photoId/edit'>
            <EditComment />
          </Route>
          <Route path='/:photoId/:commentId/edit'>
            <EditPhoto />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
