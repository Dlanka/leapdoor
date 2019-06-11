import React, { Component } from 'react';

import '../../styles/common.css';
import styles from './JobContainer.module.css';

import { JobContext } from '../../context/JobContext';

import { Block, Button, Text } from '../../components/ui';

import SearchInput from '../../components/SearchInput/SearchInput';
import JobList from '../../components/Jobs/JobList';
import FilterModal from '../../components/FilterModal/FilterModal';
import Preview from '../../components/Jobs/Preview';

import { jobs } from '../../mock';

const { innerHeight } = window;

export default class JobContainer extends Component {

    state = {
        isFilterModalOpen: false,
        jobList: [],
        selectedJob: null
    }

    componentDidMount() {

        this.setState({
            jobList: jobs
        });

    }

    onSelectedJob = (id) => {
        this.setState({ selectedJob: id });

    }

    showFilterModal = () => {
        this.setState(prevState => {
            return { isFilterModalOpen: !prevState.isFilterModalOpen }
        })
    }

    render() {

        return (
            <Block className="container-fluid">

                <JobContext.Provider value={{
                    isFilterModalOpen: this.state.isFilterModalOpen,
                    showFilterModal: this.showFilterModal
                }}>
                    <FilterModal />

                    <Block className="container-top-space" row style={{ height: `${innerHeight - 50}px` }}>

                        <Block col="7" >
                            <Preview />
                        </Block>

                        <Block col="5" >

                            <Block row className={styles.searchArea}>
                                <Block col="9">
                                    <SearchInput></SearchInput>
                                </Block>
                                <Block col="3" >
                                    <Button small block primary onClick={() => this.showFilterModal()}>Filter</Button>
                                </Block>
                            </Block>

                            <Block className="mb-5">
                                <Text type="caption">No of jobs 350</Text>
                            </Block>

                            <Block className="radius" col >
                                <Block row>
                                    <JobList
                                        jobs={this.state.jobList}
                                        onClick={this.onSelectedJob}
                                    />
                                </Block>
                            </Block>

                        </Block>

                    </Block>
                </JobContext.Provider>

            </Block>
        )
    }
}
