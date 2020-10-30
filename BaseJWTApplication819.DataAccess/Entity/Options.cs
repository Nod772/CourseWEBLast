using System;
using System.Collections.Generic;
using System.Text;

namespace BaseJWTApplication819.DataAccess.Entity
{
    public class Options
    {
        public int ID { get; set; }
        public string Value { get; set; }
        public int Counter { get; set; }

        public virtual Discussion Discussion { get; set; }
    }
}
