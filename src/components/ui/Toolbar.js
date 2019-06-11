import React from 'react';

import { Block } from '../ui'
import styles from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import Nav from '../../Nav/Nav';


const Toolbar = props => (
    <header className={styles.toolbar}>
        <Block row align="center" className={styles.nav}>
            <Block col="2" className={styles.logo}>
              <Logo />
            </Block>
            <Block col="10" className={styles.navLiks}>
                <Nav />
            </Block>
        </Block>
    </header>
);

export default Toolbar;