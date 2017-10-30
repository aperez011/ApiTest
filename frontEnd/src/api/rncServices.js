var agent = require('superagent');
var basicUrl = require('../components/custom');

var url = basicUrl.rncBasicUrl


//complete link find rnc rnc=401506254&uid=7c9e6679-7425-40de-944b-e07fc1f90ae7

var Rnc = { 
	GetAll: function(ths) {
		agent.get(url)
			 .query({rnc: ths.state.RNC.Number, uid:'7c9e6679-7425-40de-944b-e07fc1f90ae7'})
			 .then(function(resp){
	       	ths.setState({result: resp.text});
	    });
	},

	Save: function(ths) {
		/*agent.post(url)
			 .query({prov: ths.state.ProvMun.Provincia, mun: ths.state.ProvMun.Municipio})
			 .then(function(resp){

		        if(resp.statusText == "OK"){
		        	ths.setState({ProvMuns: JSON.parse(resp.text)});
		        }
		        else{
		        	alert('fail Save');
		        }
	    });*/
	}


}

module.exports = Rnc;

