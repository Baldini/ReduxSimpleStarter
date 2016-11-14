import React, {Component} from 'react'

class SearchBar extends Component {
    render() {
        return <input onChange={event => console.log(event.taget.value)}/>;
    }
}

export default SearchBar;
