import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Top from '../routes/Top';
import Login from '../routes/Login';
import Logout from '../routes/Logout';
import Info1 from '../routes/Info1';
import Table from '../routes/Table';
import Info2  from '../routes/Info2';
import Info3 from '../routes/Info3';
import Question1 from '../routes/Question1';
import Question2 from '../routes/Question2';
import Question3 from '../routes/Question3';
import Result from '../routes/Result';
import firebase from '../utils/firebase';


const App = () => {
  const [loading, toggleLoding] = useState(true);
  const [authenticated, toggleAuthenticated] = useState(false);
/* 
  const toggleAuth = i => { toggleAuthenticated(i) }
  const toggleLodingFunc = () => { toggleLoding(false) }

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        toggleAuth(true);
        toggleLodingFunc();
      } else {
        toggleAuth(false);
        toggleLodingFunc();
      }
    })
  });
 */
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        toggleAuthenticated(true);
        toggleLoding(false);
      } else {
        toggleAuthenticated(false);
        toggleLoding(false);
      }
    })
  })

  const route = (path, boolean, expected, redirect) => {
    return (
      <Route exact path={'/' + path} render={() => {
        if (authenticated === boolean) {
          return expected
        } else {
          return <Redirect to={'/' + redirect} />
        }
      }} 
      />
    )
  }

  if (loading) return <p>loading...</p>
  return(
    <BrowserRouter>
      <div>
      {route('', true, <Top />, 'login')}
      {route('login', false, <Login />, '')}
      {route('logout', true, <Logout />, '')}
      {route('info1', true, <Info1 />, '')}
      {route('table', true, <Table />, '')}
      {route('info2', true, <Info2 />, '')}
      {route('info3', true, <Info3 />, '')}
      {route('question1', true, <Question1 />, '')}
      {route('question2', true, <Question2 />, '')}
      {route('question3', true, <Question3 />, '')}
      {route('result', true, <Result />, '')}
      </div>
    </BrowserRouter>
  );
}


/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      user: null
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if(user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        })
      }
    })
  }

  render() {
    const { authenticated, loading } = this.state;
    if (loading) return <p>loading...</p>
    return(
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => 
            authenticated === true ? (
              <Top />
            ) : (
              <Redirect to='/login' />
            )
          }
          />
          <Route path='/' render={() => 
            authenticated === false ? (
              <Login />
            ) : (
              <Redirect to='/' />
            ) 
          }
          />
          <Route path='/info1' render={() => 
            authenticated === true ? (
              <Info1 />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
          <Route path='/table' render={() => 
            authenticated === true ? (
              <Table />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
          <Route path='/info2' render={() => 
            authenticated === true ? (
              <Info2 />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
          <Route path='/info3' render={() => 
            authenticated === true ? (
              <Info3 />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
          <Route path='/question1' render={() => 
            authenticated === true ? (
              <Question1 />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
          <Route path='/question2' render={() => 
            authenticated === true ? (
              <Question2 />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
          <Route path='/question3' render={() => 
            authenticated === true ? (
              <Question3 />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
          <Route path='/result' render={() => 
            authenticated === true ? (
              <Result />
            ) : (
              <Redirect to='/' />
            )
          } 
          />
        </div>
      </BrowserRouter>
    );
  }
}
*/



export default App;
