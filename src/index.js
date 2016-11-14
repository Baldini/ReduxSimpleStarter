import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyAw7HcL4cNA4qZ-nPaK7dZ1Z--DeTN85-w';

//CREATE A NEW COMPONENT. This COMPONENT should produce some HTML
const App = () => {
    return( <div>
        <SearchBar/>
    </div>
  );
}

//Take this COMPONENT's generated HTML and put it on the page (in the DOM)
ReactDOM.render(
    <App/>, document.querySelector('.container'));
