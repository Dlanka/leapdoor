import React, { Component } from 'react'
import styled from 'styled-components';

const TabContainer = styled.div`
  width:100%;
  li {
    border-bottom:2px solid ${props => props.borderColor ? props.borderColor : '#ddd'};
    width: ${props => props.tabwidth};
    color:${props => props.borderColor ? props.borderColor : '#ddd'};
  }
`;

const Ul = styled.ul`
  margin:0;
  padding:0;
  display:flex;
`;

const TabLink = styled.li`
  font-size:18px;
  font-weight:500;
  list-style:none;
  text-align:center;
  padding:10px;
  cursor:pointer;
  border-color:${props => props.active ? `${props.activeColor || '#000'} !important` : ''};
  color:${props => props.active ? `${props.activeColor || '#000'} !important` : '#ddd'};
`;

export default class Tabs extends Component {

  state = {
    tabs: [],
    activeTab: null
  }

  componentWillMount() {

    this.setState({
      tabs: this.props.children,
      activeTab: this.props.children[0].props
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tabs !== nextState.tabs;
  }

  onTabClick = (index) => {

    const updatedTabs = this.state.tabs.map((tab,i) => {
      return {
        ...tab,
        props: {
          ...tab.props,
          active: index === i ? true : false
        }
      }
    });

    this.setState({
      activeTab: this.props.children[index].props,
      tabs:updatedTabs
    });
  }

  renderTabItem = () => {
console.log('updated')
    return this.state.tabs.map((tab, i) => {

      return (
        <TabLink
         active= {tab.props.active}
          onClick={() => { this.onTabClick(i) }}
          activeColor={this.props.activeColor}
          key={'tab_' + i}
          {...tab.props}
          >{tab.props.label}</TabLink>
      )
    })
  }

  render() {

    const _width = 100 / this.state.tabs.length;

    return (
      <TabContainer {...this.props} tabwidth={_width + '%'} >
        <Ul>
          {this.renderTabItem()}
        </Ul>
        <div>
          {this.state.activeTab.children}
        </div>
      </TabContainer>
    )
  }
}
