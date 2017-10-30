var React = require('react');
var Input = require('../common/txtInput');
var Comp = require('./companiList');
var rncService = require('../../api/rncServices');


var Company =  React.createClass({
	getInitialState: function() {
        return {
            RNC: {Number: '', result: ''},
            companies: [],
            result: ''
        };
    },

    setRncState: function(event) {
		var field = event.target.name;
		var value = event.target.value;
		this.state.RNC[field] = value;
		return this.setState({RNC: this.state.RNC});
	},

	onSearch: function(event) {
		rncService.GetAll(this);
	},

	render: function() {
		return(
			<div className="jumbotron">
				<div className="row">
					<p>Find RNC with</p>
					<br/>
					<div className="col-md-8">
						<Input
							name="Number"
							label="RNC"
							value={this.state.RNC.Number}
							error=''
							onChange={this.setRncState}/>
		                <button type="button" className="btn btn-success" onClick={this.onSearch}>Search</button> &nbsp;&nbsp;
		                <button type="button" className="btn btn-success" onClick={this.onSearch}>Save Result</button>
					</div>
	                 
	            </div>
	            <div className="row">
		            <h1>Test result in page</h1>
		            <Input
						name="nn"
						label="Tepm Result"
						value={this.state.result}
						error=''/>
	            <br/>
	            	<div className="col-md-8">
						<p>Company Information</p>
						<Comp companies={this.state.companies} />
					</div>
					
	            </div>
			</div>
			);
	}

});

module.exports = Company;