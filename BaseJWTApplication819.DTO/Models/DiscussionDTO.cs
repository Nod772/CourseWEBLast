﻿using BaseJWTApplication819.DataAccess.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseJWTApplication819.DTO.Models
{
   public class DiscussionDTO
    {
        public int ID { get; set; }
        public string QuestionText { get; set; }

        public virtual List<Options> Options { get; set; }
    }
}
