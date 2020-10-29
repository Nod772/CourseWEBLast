using System;
using System.Collections.Generic;
using System.Text;

namespace BaseJWTApplication819.DataAccess.Entity
{
    public class Discussion
    {
        public int ID { get; set; }
        public string QuestionText { get; set; }
        public bool Answer { get; set; }
       
        public virtual List<User> Users { get; set; }
    }
}
