import React, { Component } from "react";
import User from "./User";
import styles from "./Users.module.css";

export class Users extends Component {
  constructor(props) {
    super(props);
    // const users = this.props.users;
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No user found!");
    }
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
