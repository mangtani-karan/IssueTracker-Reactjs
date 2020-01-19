import React, { Component } from 'react';
import ProjectsTable from './ProjectsTable';
import ProjectHeading from './ProjectHeading';
import './style.css';
class App extends Component {

	render() {
		return (
			<div className='container'>
				<ProjectHeading />
				<ProjectsTable />
			</div>
		);
	}
}
export default App; 