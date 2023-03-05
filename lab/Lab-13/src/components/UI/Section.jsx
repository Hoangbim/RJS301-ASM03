import React from 'react';
import styles from './Section.module.css';

function Section(props) {
  return <div className={styles.section}>{props.children}</div>;
}

export default Section;
