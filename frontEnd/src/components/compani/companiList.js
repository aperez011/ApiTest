var React = require('react');
var Router = require('react-router');
var Custom = require('../custom');
var Link = Router.Link;

var AuthorList = React.createClass({
	propTypes: {
		companies: React.PropTypes.array.isRequired
	},

	render: function() {
		var createompaniesRow = function(company) {
			return (
				<tr key={company.id}>
					<td>{company.id}</td>
					<td>{company.rnc}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>Name</th>
						<th>RNC</th>
					</thead>
					<tbody>
						{this.props.companies.map(createompaniesRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = AuthorList;