import React from 'react';
import Card from './Card';
//import { robots } from './robots';

class CardList extends React.Component {
    renderRobots() {
        return this.props.robots.map((robot, i) => {
            return (
                <Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} />
            )
        });
    }
    render() {
        if(true)
        throw new Error('NOOOOOOOOOOOOO')
        const robots = this.props.robots;
        return (
            (!robots.length) ?
            <h1>Loading</h1>
            :
            <div>
                {this.renderRobots()}
            </div>
        );
    }
}

export default CardList;