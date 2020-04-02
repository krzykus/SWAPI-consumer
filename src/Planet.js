import React from 'react';
import axios from 'axios';

const getData = async name => {
    try {
        let url = 'http://localhost:3001/planets/'+name;
        let response = await axios.get(url);
        let data = response.data;
        return {data,callError:false};
    } catch (err) {
        return {err, callError: true};
    }
}
class Planet extends React.Component {
    constructor(){
        super();
        this.state = {loading:true}
    }

    componentWillReceiveProps(nextProps) {
        this.setState({loading:true})
        if(this.state.planetName!=nextProps.match.params.name){
            const planetName = nextProps.match.params.name;
            getData(planetName).then(planetData =>{
                if(!planetData.callError)
                {
                    planetData = planetData.data;
                    this.setState({ planetName,planetData, loading: false, error: false });
                }
                else
                {
                    console.log(planetData.err);
                    this.setState({planetName,error: true, errorCode:404});
                    //handle error here
                }
            });
        }
      }
    componentDidMount = () => {
        this.setState({loading:true})
        if (this.props.match.params) {
            try {//Too many nested stuff need to refactor and duplicate code
                const planetName = this.props.match.params.name;
                getData(planetName).then(planetData =>{
                    if(!planetData.callError)
                    {
                        planetData = planetData.data;
                        this.setState({ planetName,planetData, loading: false, error: false });
                    }
                    else
                    {
                        console.log(planetData.err);
                        this.setState({planetName,error: true, errorCode:404});
                        //handle error here
                    }
                });
            } catch (err) {
                this.setState({ loading: false, error: true });
            }
        }
    }
    render(){
        if(this.state.planetData && !this.state.error)
        {
            const { Climate, Population, Films } = this.state.planetData;
            return(
                <div>
                <h1>
                    <p>Hello from {this.state.planetName}!</p>
                </h1>
                <div>
                    <span>{Climate}, {Population}</span>
                    <span>Films</span>
                </div>
            </div>
        );
        }
        else if(this.state.error)
        {
            //Create component for error or redirect
            return(
                <div>We encountered an error: {this.state.errorCode}</div>
            );
        }
        else if(this.state.loading)
        {
            return(
                <div><img src="/loading.gif"/></div>    
            );
        }
    }

}
export default Planet;