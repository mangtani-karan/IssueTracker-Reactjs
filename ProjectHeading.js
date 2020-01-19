import React, { Component } from 'react';
import { Button, Input } from '@material-ui/core';
import './style.css';
class ProjectHeading extends React.Component {
	constructor() {
		super();
		this.state = {
			inputValue: "Issue Tracker for BizAnalytics",
			editableButton: false
		};
		this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
	}

	// Disables/Enables the button
	toggleDisplayBio() {
		this.setState({ editableButton: !this.state.editableButton });
	}

	// Renders the header of application
	render() {
		return (
			<div className="header">
				<div className='box-input box-component'>
					<Input id="outlined-basic" label="Outlined" variant="outlined"
						value={this.state.inputValue}
						onChange={e => this.setState({ inputValue: e.target.inputValue })}
						placeholder="Title"
						disabled={!this.state.editableButton}>
					</Input>
				</div>
				<div className='box-button box-component'>
					<Button variant="contained" color="primary" onClick={this.toggleDisplayBio}>
						{this.state.editableButton ? (<b>Done</b>) : (<b>Edit</b>)}
					</Button>
				</div>
			</div>
		);
	}
}

export default ProjectHeading; 