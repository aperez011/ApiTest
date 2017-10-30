using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Diagnostics;

namespace webApi.Controllers
{
    public class RncController : ApiController
    {
        [HttpGet]
        public string get()
        {
            Process.Start("http://app.mopc.gob.do/Utilitario/api/rnc/buscarrnc?rnc=401506254&uid=7c9e6679-7425-40de-944b-e07fc1f90ae7");

            return "";
        }
    }
}
