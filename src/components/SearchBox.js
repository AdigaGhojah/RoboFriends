import React from 'react';


class SearchBox extends React.Component{

    render(){
        return(
            <div className='pa2'>
                <input onChange={this.props.onSearchChange} className='pa3 ba b--green bg-light-blue' type='search' placeholder='search robots'/>
            </div>

        )
    }

}



export default SearchBox;