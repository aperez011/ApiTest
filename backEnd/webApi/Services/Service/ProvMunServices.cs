using System;
using System.Collections.Generic;
using System.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Text;
using System.Threading.Tasks;
using Services.Entities;
using Services.dbModel;

namespace Services.Service
{
    public partial class ProvMunServices
    {
        internal dbModelContainer context;

        #region [ Public Properties ]

        public ProvMunServices()
        {
            context = new dbModelContainer();
            if (context.Database.Connection.State == ConnectionState.Closed)
            {
                context.Database.Connection.Open();
            }
        }

        public static ProvMunServices Current { get { return new ProvMunServices(); } }
        #endregion

        public List<ProvinciaMunicipioDto> GetAll()
        {
            List<ProvinciaMunicipioDto> result = new List<ProvinciaMunicipioDto>();

            foreach (var item in context.ProvinciaMunicipio.Select(c => c))
            {
                result.Add(new ProvinciaMunicipioDto
                {
                    GID = item.gid,
                    Provincia = item.Provincia,
                    Municipio = item.Municipio

                });
            }

            context.Database.Connection.Close();
            return result;
        }

        public List<ProvinciaMunicipioDto> Save(ProvinciaMunicipioDto entity)
        {
            return this.Save(new List<ProvinciaMunicipioDto>() { entity });
        }

        public List<ProvinciaMunicipioDto> Save(List<ProvinciaMunicipioDto> entities)
        {
            try
            {
                //List<ProvinciaMunicipio> sEntities = new List<ProvinciaMunicipio>();

                foreach (var provMun in entities)
                {
                    context.ProvinciaMunicipio.Add(new ProvinciaMunicipio()
                    {
                        gid = provMun.GID,
                        Provincia = provMun.Provincia,
                        Municipio = provMun.Municipio
                    });

                }
                
                //context.ProvinciaMunicipio.AddRange(sEntities);
            
                context.SaveChanges();
                context.Database.Connection.Close();

                return this.GetAll().OrderBy(c=> c.Provincia).ToList();
            }
            catch (Exception ex)
            {
                context.Database.Connection.Close();
                return new List<ProvinciaMunicipioDto>();
            }
        }

    }
}
