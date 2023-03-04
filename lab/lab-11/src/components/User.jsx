import React, { Component } from 'react';
import styles from './User.module.css';

export class User extends Component {
  render() {
    return <li className={styles.user}>{this.props.user.name}</li>;
  }
}

export default User;
