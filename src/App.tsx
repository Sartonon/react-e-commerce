import React, { FC, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SigninPage from './pages/SigninPage/SigninPage';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { IUser } from './redux/user/user.types';
import { setCurrentUser } from './redux/user/user.actions';
import { Dispatch } from 'redux';
import { ReduxActions } from './redux';

interface IAppProps {
  setCurrentUser: (user: IUser | null) => void;
}

const App: FC<IAppProps> = ({ setCurrentUser }): JSX.Element => {
  const unsubscribeFromAuth = useRef<firebase.Unsubscribe>();

  useEffect((): (() => void) => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(
      async (userAuth: firebase.User | null) => {
        if (userAuth) {
          const userRef = await createUserProfile(userAuth);
          if (userRef) {
            userRef.onSnapshot(snapshot => {
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data(),
              });
            });
          }
        } else {
          setCurrentUser(null);
        }
      },
    );

    return () => {
      if (unsubscribeFromAuth.current) {
        unsubscribeFromAuth.current();
      }
    };
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch<ReduxActions>) => ({
  setCurrentUser: (user: IUser | null) => dispatch(setCurrentUser(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(App);
