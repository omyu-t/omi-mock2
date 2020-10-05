import React from 'react';
import firebase from '../../utils/firebase';


const Logout = () => (
  <div>
    <button onClick={ () => firebase.auth().signOut() }>sign out</button>
  </div>
);

export default Logout;