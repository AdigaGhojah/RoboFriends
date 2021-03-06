import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users=>this.setState({ robots: users })
        )
        fetch('https://example.com/',{
            mode: 'cors',
        })
        .then(response =>{
            console.log(response.json());
            })
        
        
    }

    render() {
        const {robots, searchfield} = this.state
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return (
            <div className='tc'>

                <h1 className='f1'>RoboFirends</h1>

                <SearchBox onSearchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                    <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>

        )
    }

}



export default App;