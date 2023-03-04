import React, { Component } from 'react';
import User from './User';
import styles from './Users.module.css';

export class Users extends Component {
  constructor(props) {
    super(props);
    // const users = this.props.users;
  }

  render() {
    return (
      <div className={styles.users}>
        <ul>
          {this.props.users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
