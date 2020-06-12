import React, { Component } from 'react';

import {CardList} from './components/card-list/card-list.components';
import './App.css';
import {SearchBox} from './components/search-box/search-box.component';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField :''
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }
    handleChange = e =>
    {
        this.setState({searchField: e.target.value});
    }
    render() {
        const {monsters , searchField} = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return ( 
            <div className='App'>
                 <h1 className="heading">Yihua</h1>
                 {/* <input type="search" placeholder="search Monsters" onChange={e => 
                    this.setState({searchField: e.target.value })
                    }/> */}
                {/* <CardList monsters = {this.state.monsters}>
                    
                    
                </CardList> */}
                  {/* <SearchBox placeholder ='search Monster' handleChange={ e=>{this.setState({searchField: e.target.value})}} /> */}
                <SearchBox placeholder ='search Monster' handleChange={this.handleChange}/>
                
                 <CardList monsters = {filteredMonsters}>
                    
                </CardList>

            </div>
        )
    }
}
export default App;