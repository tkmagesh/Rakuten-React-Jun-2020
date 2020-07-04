import React, { Component } from 'react';
import './index.css';
import bugApi from './services/bugApi';

/* 
Use Cases:
    1. Add new bugs
    2. List the added bugs
    3. Remove any bug (Assignment)
    4. Toggle the 'closed' status of any bug (Assignment)
    5. Remove closed bugs (Assignment)
    6. Display stats ( # of closed bugs / total # of bugs) (Assignment)
    7. Sort the bugs (Assignment)
    8. Persist the bugs in the server

    9. Refactor the BugTracker component into smaller components 
            (BugStats, BugEdit, BugList, BugItem, BugSort)
*/

class BugTracker extends Component {
    state = {
        bugs : [],
        newBugName : ''
    }
    componentDidMount = async () => {
        const bugs = await bugApi.getAll();
        this.setState({ bugs : bugs});
    }
    onAddNewClick = async () => {
        const newBugData = { id : 0, name : this.state.newBugName, isClosed : false };
        const newBug = await bugApi.save(newBugData);
        this.setState({bugs : [...this.state.bugs, newBug]});
    }
    render = () => {
        const { bugs } = this.state;
        return(
            <>
                <h3>Bug Tracker</h3>
                <hr />
                
                <section className="stats">
                    <span className="closed">1</span>
                    <span> / </span>
                    <span>{bugs.length}</span>
                </section>
                <section className="sort">
                    <label htmlFor="">Order By :</label>
                    <select name="" id="">
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                    <label htmlFor="">Descending : </label>
                    <input type="checkbox" name="" id="" />
                </section>
                <section className="edit">
                    <label htmlFor="">Bug Name :</label>
                    <input type="text" onChange={ evt => this.setState({newBugName : evt.target.value})} />
                    <input type="button" value="Add New" onClick={this.onAddNewClick}/>
                </section>
                <section className="list">
                    <ol>
                        { bugs.map(bug => (
                            <li key={bug.id}>
                                <span className="bugname">{bug.name}</span>
                                <div>
                                    <input type="button" value="Remove" />
                                </div>
                            </li>)
                            )
                        }
                    </ol>
                    <input type="button" value="Remove Closed" />
                </section>
            </>
        )
    }
}

export default BugTracker;