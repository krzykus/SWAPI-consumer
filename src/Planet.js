import React from 'react';

class Planet extends React.Component {
    constructor(){
        super();
        this.state = {}
    }
    componentWillReceiveProps(nextProps) {
        console.log(this.context);
        console.log(this.props)
        //console.log(currentRouteName);
        console.log(nextProps)
        if(this.state.planetName!=nextProps.match.params.name){
            const planetName = nextProps.match.params.name;
            //Call API
            this.setState({ planetName, loading: false });
        }
        if( false ) {
          let newState = Object.assign({}, this.state);
          //this.setState({ nextState });
        }
      }
    componentDidMount = () => {
        console.log(this.props);
        if (this.props.match.params) {
            try {
                console.log(this.props.match.params.name)
                const planetName = this.props.match.params.name;
                //TODO: Call API here
                this.setState({ planetName, loading: false });
            } catch (err) {
                this.setState({ loading: false, error: true });
            }
        }
    }
    render(){
        console.log('Render');
        console.log(this.state.planetName)
      return(
        <h1>Hello {this.state.planetName}!!</h1>
      );
    }
/*export default props => {
  return <h1>Hello {props.name}!</h1>;
};*/
}
export default Planet;