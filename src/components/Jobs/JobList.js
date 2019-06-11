import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from './JobList.module.css';

import { Text, Block } from '../ui';
import { List, Item } from '../ui/ListView';


import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar';

const {innerHeight} = window;

export default class JobList extends Component {

    constructor(props){
        super(props);
        this.listRef = React.createRef();

        this.state ={
            listHeight: 0
        }
    }

    componentDidMount() {
        const top = ReactDOM.findDOMNode(this.listRef.current).getBoundingClientRect().top

        this.setState({listHeight: innerHeight - top })
    }

    renderJobItem = (jobs) => {

        return jobs.map(job => (
            <Item 
                key={job.id} 
                pointer 
                rounded
                className={styles.jobItem}
                onClick={()=> this.props.onClick(job.id)}
              >
                <Text size="14" weight="bold" spacing="2px" mb="2px">
                    {job.title}
                </Text>
                <Text weight="regular" spacing="2px" mb="7px">
                    {job.location}
                </Text>
                <Text size="12" color="light" mb="10px">
                    {job.description}
                </Text>
                <Block row>
                    <Block col="5">
                        <Text variant="h6">
                            3 days
                        </Text>
                    </Block>
                    
                </Block>
            </Item>
        ));
    }

    render() {

        const { jobs } = this.props;

        let content = <Text>Loading...</Text>


        return (
            <List ref={this.listRef} 
              style ={{height:`${this.state.listHeight}px`}}>
                <PerfectScrollbar>
                {
                    jobs.length === 0 ? content :
                        this.renderJobItem(jobs)

                }
                 </PerfectScrollbar>
            </List>
        )
    }
}
