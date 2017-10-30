using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using Services.Entities;
using Services.Service;

namespace webApi.Controllers
{
    public class ProvMunController : ApiController
    {
        [HttpGet]
        public List<ProvinciaMunicipioDto> GetAll()
        {
            return ProvMunServices.Current.GetAll();
        }

        [HttpPost]
        public List<ProvinciaMunicipioDto> SaveEntity(string prov, string mun)
        {
            return ProvMunServices.Current.Save(new ProvinciaMunicipioDto() { Provincia = prov, Municipio = mun });
        }
    }
}
