import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingPage from "./components/LandingPage";
import PageNotFound from "./components/PageNotFound";
import PostIllusion from "./components/PostIllusion";
import Explore from "./components/Explore";
import SingleIllusion from "./components/SingleIllusion";
import EditComment from "./components/EditComment";
import EditIllusion from "./components/EditIllusion";

// import UserPhotos from './components/UserPhotos';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const sessionUser = useSelector((state) => state.session.user)

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            {sessionUser ?
            <Explore /> :
            <LandingPage />}
          </Route>
          <Route path='/explore/:illusionId/:commentId/edit'>
            <EditComment />
          </Route>
          <Route path='/explore/:illusionId/edit'>
            <EditIllusion />
          </Route>
          <Route path='/explore/:illusionId'>
            <SingleIllusion />
          </Route>
          <Route path='/post'>
            <PostIllusion />
          </Route>
          <Route path='/explore'>
            <Explore />
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
