var React = require('react');
var Router = require('react-router');
var ProvMunService = require('../api/provMunServices');
var Link = Router.Link;

var HomeList = React.createClass({
	propTypes: {
		ProvMuns: React.PropTypes.array.isRequired
	},

	render: function() {
		var createProvMunRow = function(provMun) {
			return (
				<tr key={provMun.gid}>
					<td><Link to="app" params={{id: provMun.gid}}>{provMun.Provincia}</Link></td>
					<td>{provMun.Municipio}</td>
				</tr>
			);
		};

		return (
			<div>
				<table className="table">
					<thead>
						<th>Provincia</th>
						<th>Municipio</th>
					</thead>
					<tbody>
						{this.props.ProvMuns.map(createProvMunRow, this)}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = HomeList;