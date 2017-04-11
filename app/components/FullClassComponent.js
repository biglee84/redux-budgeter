import React from 'react';
import StatelessComponent from './StatelessComponent';

class FullClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            data: 'i have been passed as props'
        }

    }
    componentDidMount(){

    }

    render() {
        return(
            <div>
                I am a full class component, i should have state and logic
            <StatelessComponent data={this.state.data} />
            </div>
        )
    }
}

FullClassComponent.propTypes = {

};
FullClassComponent.defaultProps = {

};

export default FullClassComponent;
