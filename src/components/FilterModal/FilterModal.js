import React, { Component } from 'react';
import styled from 'styled-components';

import styles from './FilterModal.module.css';

import { Block, Text, Button } from '../ui';
import { Chips, Chip } from '../ui/Chip';
import ListLink from './ListLink';
import {JobContext} from './../../context/JobContext';


class FilterModal extends Component {
    
    static contextType = JobContext;

   
    render() {
     const {isFilterModalOpen,showFilterModal} = this.context;
        return (
            <Modal show={isFilterModalOpen}>
                <Text mb="20px" variant="h1">Filter By</Text>

                <Block row>
                    <Block col>
                        <Chips onSelectedChip={(p) => { console.log(p) }}>
                            <Chip id="ct" active>Category</Chip>
                            <Chip id="lc">Working</Chip>
                            <Chip id="lc">Location</Chip>
                        </Chips>
                    </Block>
                </Block>

                <Block row className={styles.filterOption}>

                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                    <ListLink >IT-Sware /DB/QA/Web/Graphics/GIS</ListLink>
                </Block>

                    
                <Block align="center" row className={styles.footer}>
                    <Block col="10">
                        <Block col>
                            <Text variant="caption">IT-Sware /DB/QA/Web/Graphics/GIS | Colombo</Text>
                        </Block>
                    </Block>
                    <Block col="2">
                        <Button small primary>Apply</Button>
                        <Button small margin="0 0 0 10px" onClick={() => {showFilterModal()}}>Close</Button>
                    </Block>
                </Block>
            </Modal>
        )
    }
}

const Modal = styled(Block)`
    width: calc(100% - 30px);
    height: 530px;
    background: #ffffff;
    position: absolute;
    z-index: 99;
    overflow:hidden;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.23);
    top:${props => props.show ? '70px' : '-300%'};
    transition: all ease-in 0.3s;
`;


export default FilterModal;