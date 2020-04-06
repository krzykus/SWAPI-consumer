import React from 'react';
import axios from 'axios';
import Loading from './components/Loading';
import MovieRow from './components/MovieRow';
import './Planet.css';

 
class Planet extends React.Component {
    constructor(){
        super();
        this.state = {loading:true}
    }

    callURL = async name => {
        try {
            let url = 'http://localhost:3001/planets/'+name;
            let response = await axios.get(url);
            let data = response.data;
            return {data,callError:false};
        } catch (err) {
            return {err, callError: true};
        }
    }
    getData = planetName => {
        try {
            this.callURL(planetName).then(planetData =>{
                if(!planetData.callError)
                {
                    planetData = planetData.data;
                    this.setState({ planetName,planetData, step:"content" });
                }
                else
                {
                    this.setState({planetName,step:"error", errorCode:404});
                    //handle error here
                }
            });
        } catch (err) {
            this.setState({ step:"error",errorCode:500 });
        }
    }

    rowArray = arr => {
        let perRow = 2;
        let chunks = arr.map( function(key,i){ 
            return i%perRow===0 ? arr.slice(i,i+perRow) : null; 
        }).filter(function(e){ return e; });
        return chunks;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({step:"loading"})
        if(this.state.planetName!=nextProps.match.params.name){
            const planetName = nextProps.match.params.name;
            this.getData(planetName);
        }
      }
      
    componentDidMount = () => {
        this.setState({step:"loading"})
        if (this.props.match.params) {
            const planetName = this.props.match.params.name;
            this.getData(planetName);
        }
    }
    render(){
        if(this.state.step=="loading")
        {
            return(
                <Loading />
            );
        }
        else if(this.state.step=="content")
        {
            const { Climate, Population, Films } = this.state.planetData;
            const movieRows = this.rowArray(Films);
            let moviesDisplay = movieRows.map((key, index) => {
                return (
                    <MovieRow rowData={movieRows[index]} key={index} />
                );
            })
            return(
                <div>
                <h1 className="hello-world">
                    Hello from {this.state.planetName}!
                </h1>
                <div>
                    <div className="infoBar">Climate: {Climate}, Population: {Population}</div>
                    {moviesDisplay}
                </div>
            </div>
        );
        }
        else if(this.state.step=="error")
        {
            //Create component for error or redirect
            return(
                <div>We encountered an error: {this.state.errorCode}</div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

}
export default Planet;