import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

// Scrollbar 
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScroll from 'react-perfect-scrollbar';

import { Block, Text } from '../ui';

const Main = styled(Block)`
    padding:30px 0;
`;

const Details = styled(Block)`
    padding:20px 30px;
`;

const {innerHeight} = window;

export default class Preview extends Component {
    
    state = {
        mainHeight:0
    }

    previewRef = React.createRef();

    componentDidMount() {
        const top = ReactDOM.findDOMNode(this.previewRef.current).getBoundingClientRect().top;
        this.setState({mainHeight : innerHeight - top - 15})
    }

  render() {
    return (
      <Main 
        ref={this.previewRef} 
        className="radius" 
        color="white" 
        style={{height:`${this.state.mainHeight}px`}}
      >
      
        <PerfectScroll>
            <Block col>
                <Block row>

                    <Block col>
                        <Text align="center" weight="light" variant="h3" mb="20px">Virtusa (Pvt) Ltd</Text>
                        
                        <Text 
                            align="center"
                            variant="h2"
                            mb="8px"
                            >
                            Senior Node.js Developer (1)
                        </Text>
                        
                        <Block row justify="center">
                            <Text color="light" mr="5px">Colombo</Text>
                            <Text color="light" ml="5px">Full Time</Text>
                        </Block>
                    </Block>

                </Block>

                <Block row >
                    <Details col>
                        <Text variant="p">
                            Enterprize Software Development : Apply to sltalent@persistent.com (Formally known as Intel Software/ Aepona
                        </Text>
                    </Details>
                </Block>

            </Block>
        </PerfectScroll>
      
      </Main>
    )
  }
}
