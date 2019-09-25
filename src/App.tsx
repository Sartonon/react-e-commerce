import React, { FC, useEffect, useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SigninPage from './pages/SigninPage/SigninPage';
import { auth } from './firebase/firebase.utils';

const App: FC = (): JSX.Element => {
  const [currentUser, setUser] = useState<firebase.User | null>(null);
  const unsubscribeFromAuth = useRef<firebase.Unsubscribe>();

  useEffect((): (() => void) => {
    // tslint:disable-next-line: no-shadowed-variable
    unsubscribeFromAuth.current = auth.onAuthStateChanged(
      (user: firebase.User | null) => {
        if (user) {
          setUser(user);
        }
      },
    );

    return () => {
      if (unsubscribeFromAuth.current) {
        unsubscribeFromAuth.current();
      }
    };
  }, []);

  console.log(currentUser);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </div>
  );
};

export default App;
