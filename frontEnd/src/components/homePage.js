var React = require('react');
var Router = require('react-router');
var Dropdown = require('./common/dropdown');
var custom = require('./custom');
var List = require('./homeList');
var ProvMunService = require('../api/provMunServices');
var Link = Router.Link;

var provincias = JSON.parse(custom.provincias).Provincias;

var Home = React.createClass({
	getInitialState: function() {
        return {
            options: [],
            municipios: [],
            ProvMun: {Provincia: '', Municipio: ''},
            ProvMuns: [],
            RNC: {Number: '', result: []}
        };
    },

    componentDidMount: function() {
    	var op = [];

    	op = provincias.map(function(prov) {
    		var option = {code: '', description:''};
    		option.code = prov.Provincia;
    		option.description = prov.Provincia;

    		return option;

    	});

    	this.setState({options: op})

    	//Set Provincias Seved.
    	ProvMunService.GetAll(this);
	},

	onSave: function() {
		ProvMunService.Save(this);
	},

    provOnChange: function(event) {
    	var muns = provincias.find((e) => { return e.Provincia === event.newValue});
    	var op = [];

    	this.state.ProvMun['Provincia'] = event.newValue;

    	op = muns.Municipios.map(function(mun) {
    		var option = {code: '', description:''};
    		option.code = mun;
    		option.description = mun;

    		return option;

    	});

    	this.setState({municipios: op})


    },

    munOnChange: function(event) {
    	var op = [];

    	this.state.ProvMun['Municipio'] = event.newValue;
    },


	render: function() {
		return (
			<div className="jumbotron">
				<div >
					<div className="row">
						<p>Save Provincia with Municipio.</p>

						<div className="col-md-4">
							<Dropdown id='provincias' 
			                  options={this.state.options} 
			                  value={this.state.ProvMun.Provincia}
			                  labelField='description'
			                  valueField='code'
			                  onChange={this.provOnChange}/>
		                 </div>

		                 <div className="col-md-4">
							<Dropdown id='municipios' 
			                  options={this.state.municipios} 
			                  value={this.state.ProvMun.Municipio}
			                  labelField='description'
			                  valueField='code'
			                  onChange={this.munOnChange}/>
		                 </div>
		            </div>

	                <br/>
	                <button type="button" className="btn btn-success" onClick={this.onSave}>Save</button>

		            <div className="row">
			            <br/>
			            <div className="col-md-8">
			            	<List ProvMuns={this.state.ProvMuns} />
			            </div>
		            </div>	
	            </div>
			</div>
		);
	}
});

module.exports = Home;