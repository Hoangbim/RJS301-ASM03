import React, { Component } from 'react';
import styles from './UserFinder.module.css';

export class UserFinder extends Component {
  constructor(props) {
    super(props);
  }

  sendName(e) {
    this.props.findName(e.target.value);
  }
  render() {
    return (
      <div className={styles.finder}>
        <input type="text" onChange={this.sendName.bind(this)} />
      </div>
    );
  }
}

export default UserFinder;
