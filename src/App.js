import React, { useEffect } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import allActions from './actions';

function App() {
  const counter = useSelector(st => st.counter);
  const currUser = useSelector(st => st.currentUser);

  const dispatch = useDispatch();

  const user = { name: 'Sairina' };

  useEffect(() => {
    dispatch(allActions.setUser(user))
    // allActions is an object we're importing
    // setUser is an ACTION CREATOR that is also a key in allActions
  },[]);

  return (
    <div className="App">
      {currUser.loggedIn ?
        <div>
          <h1>Hello, {currUser.user.name}</h1>
          <button onClick={() => dispatch(allActions.logOut())}>Logout</button>
        </div> :
        <div>
          <h1>Login</h1>
          <button onClick={() => dispatch(allActions.setUser(user))}>Login as Rei</button>
        </div>
      }
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(allActions.increment())}>+</button>
      <button onClick={() => dispatch(allActions.decrement())}>-</button>
    </div>
  );
}

export default App;
