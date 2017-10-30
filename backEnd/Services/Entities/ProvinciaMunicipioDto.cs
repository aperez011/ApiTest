using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.Entities
{
    public partial class ProvinciaMunicipioDto
    {
        public ProvinciaMunicipioDto()
        {
            GID = Guid.NewGuid();
        }

        #region [ Internal Properties ]

        private Guid _gid;
        private string _provincia;
        private string _municipio;

        #endregion

        #region [ Public Properties ]

        public Guid GID
        {
            get { return _gid; }
            set { _gid = value; }
        }

        public string Provincia
        {
            get { return _provincia; }
            set { _provincia = value; }
        }

        public string Municipio
        {
            get { return _municipio; }
            set { _municipio = value; }
        }
        
        #endregion

    }
}
