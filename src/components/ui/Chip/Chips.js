import React, { Component } from 'react'
import Chip from './Chip';

export default class Chips extends Component {

    state = {
        chips: []
    }

    componentWillMount() {
        this.setState({
            chips: this.updateChipsWithId(this.props.children)
        });
    }

    componentDidMount() {
        const activeChip = this.state.chips.filter(chip => {
            return chip.props.active === true;
        });

        if (this.props.onSelectedChip) {
            this.props.onSelectedChip(activeChip[0].props);
        }

    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.chips !== nextState.chips;
    }


    updateChipsWithId = (chipsArray) => {
        return chipsArray.map((chip, i) => {
            return {
                ...chip,
                props: {
                    ...chip.props,
                    chipId: 'chip_' + i
                }
            }
        })
    }

    onTriggerParent = (props) => {

        if (this.props.onSelectedChip) {
            this.props.onSelectedChip(props)
        }

        const upResult = [];

        const beforeUpdateChip = this.state.chips.map(chip => {

            return {
                ...chip,
                props: {
                    ...chip.props,
                    active: false
                }
            }
        });

        beforeUpdateChip.map(chip => {
            let updateChip;
            if (chip.props.chipId === props.chipId) {
                updateChip = {
                    ...chip,
                    props: {
                        ...chip.props,
                        active: true
                    }
                }
            } else {
                updateChip = chip;
            }

            return upResult.push(updateChip);
        });

        this.setState({ chips: upResult });
    }

    render() {

        return (
            <React.Fragment>
                {this.state.chips.map((chip, i) => {

                    return (
                        <Chip
                            chipId={chip.props.chipId}
                            key={`chip_${i}`}
                            hasParent={true}
                            active={chip.props.active}
                            callToParent={this.onTriggerParent}
                            {...chip.props}
                        >
                            {chip.props.children}
                        </Chip>
                    );
                })}
            </React.Fragment>
        )
    }
}
