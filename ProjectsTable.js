import React, { Component } from 'react'
class ProjectsTable extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: [
				{ id: 1, description: 'Create login page', status: 'Done' },
				{ id: 2, description: 'Create registration page', status: 'In Progress' },
				{ id: 3, description: 'Integrate OTP API with registration page', status: 'Not Started' },
				{ id: 4, description: 'Create dashboard with side navigation', status: 'Not Started' },
				{ id: 5, description: 'Design database model for User model', status: 'Not Started' },
			],
			options: [
				'Done',
				'Not Started',
				'In Progress'
			]
		}
	}

	// Render table header and their columns
	renderTableHeader() {
		let header = Object.keys(this.state.projects[0])
		return header.map((key, index) => {
			return <th key={index}>{key.toUpperCase()}</th>
		})
	}

	// Render table rows with data
	renderTableData() {
		return this.state.projects.map((student, index) => {
			const { id, description, status } = student
			return (
				<tr className={this.changeRowBG(status)} key={id.toString()}>
					<td>{id}</td>
					<td>{description}</td>
					<td>
						<select value={status} onChange={e => this.updateProjectStatus(e.target.value, index)} >
							{this.state.options.map((item) => <option key={item} value={item}>{item}</option>)}
						</select>
					</td>
				</tr>
			)
		})
	}

	// Update project status on selecting an option
	updateProjectStatus(e, i) {
		var item = this.state.projects[i];
		item.status = e;
		var items = this.state.projects
		items[i] = item
		this.setState({ projects: items });
	}

	// Change background of row on selecting an option
	changeRowBG(status) {
		switch (status) {
			case 'Done': {
				return 'done';
			}
			case 'In Progress': {
				return 'in-progress';
			}
			case 'Not Started': {
				return 'not-started';
			}
			default:
				return 'done'
		}
	}

	// Render project table
	render() {
		return (
			<div>
				<table id='projects'>
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ProjectsTable; 
