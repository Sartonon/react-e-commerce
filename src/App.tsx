import React, { FC, useEffect, useState, useRef } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SigninPage from './pages/SigninPage/SigninPage';
import { auth, createUserProfile } from './firebase/firebase.utils';
import { IFirebaseUser } from './types';

const App: FC = (): JSX.Element => {
  const [currentUser, setUser] = useState<IFirebaseUser | null>(null);
  const unsubscribeFromAuth = useRef<firebase.Unsubscribe>();

  useEffect((): (() => void) => {
    unsubscribeFromAuth.current = auth.onAuthStateChanged(
      async (userAuth: firebase.User | null) => {
        console.log(userAuth);
        if (userAuth) {
          const userRef = await createUserProfile(userAuth);
          if (userRef) {
            userRef.onSnapshot(snapshot => {
              setUser({
                id: snapshot.id,
                ...snapshot.data(),
              });
            });
          }
        } else {
          setUser(null);
        }
      },
    );

    return () => {
      if (unsubscribeFromAuth.current) {
        unsubscribeFromAuth.current();
      }
    };
  }, []);

  console.log({ currentUser });

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
