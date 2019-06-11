import React, { Component } from 'react'
import styles from './SearchInput.module.css';
import { Input } from '../ui';

export default class SearchInput extends Component {
    render() {
        return (
            <Input className={styles.Input} type="text" placeholder="Search" />
        )
    }
}
