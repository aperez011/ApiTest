var agent = require('superagent');
var basicUrl = require('../components/custom');

var url = basicUrl.backEndUrl

var provMun = { 
	GetAll: function(ths) {
		agent.get(url).then(function(resp){
	       	ths.setState({ProvMuns: JSON.parse(resp.text)});
	    });
	},

	Save: function(ths) {
		agent.post(url)
			 .query({prov: ths.state.ProvMun.Provincia, mun: ths.state.ProvMun.Municipio})
			 .then(function(resp){

		        if(resp.statusText == "OK"){
		        	ths.setState({ProvMuns: JSON.parse(resp.text)});
		        }
		        else{
		        	alert('fail Save');
		        }
	    });
	}


}

module.exports = provMun;