import React from 'react';

class Planet extends React.Component {
    constructor(){
        super();
        this.state = {}
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