import React, { useState } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../utils/firebase';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async e => {
    e.preventDefault();
    //const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      //this.props.histroy.push('/');
    } catch(error) {
      alert(error);
    }
  }

  const handleLogin = async e => {
    e.preventDefault();
    //const { email, password } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      //this.props.history.push('/');
    } catch(error) {
      alert(error);
    }
  }

  //const { email, password } = this.state;
  return(
    <div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input id="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignUp}>Sign up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

/*
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async handleSignUp(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      this.props.histroy.push('/');
    } catch(error) {
      alert(error);
    }
  }
  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      this.props.history.push('/');
    } catch(error) {
      alert(error);
    }
  }

  render() {
    const { email, password } = this.state;
    return(
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" value={email} type="text" onChange={(e) => this.setState({ email: e.target.value })} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" value={password} type="password" onChange={(e) => this.setState({ password: e.target.value })} />
        </div>
        <button onClick={this.handleSignUp}>Sign up</button>
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
};
*/

export default withRouter(Login);
