using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseJWTApplication819.DataAccess;
using BaseJWTApplication819.DataAccess.Entity;
using BaseJWTApplication819.DTO.Models;
using BaseJWTApplication819.DTO.Models.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BaseJWTApplication819.Api_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionController : ControllerBase
    {
        private readonly EFContext _context;
        public QuestionController(EFContext context)
        {
            _context = context;
        }

       // [Authorize(Roles = "Admin")]
        [HttpGet]
        public IEnumerable<DiscussionDTO> getAllDiscussions()
        {
            var data = _context.Discussions.Include(x=>x.Options).ToArray().Select(x => new DiscussionDTO
            {
                ID = x.ID,
                QuestionText = x.QuestionText,
                Options = x.Options.Select(y => new OptionsDTO
                {
                    ID = y.ID,
                    Counter = y.Counter,
                    Value = y.Value
                })

            }); ;

            foreach (var item in data)
            {
                item.Counter = item.Options.Sum(x => x.Counter);
              
            }

            //foreach (var disc in data)
            //{
            //    disc.Counter = disc.Options.Sum(x => x.Counter);
            //}
            return data;
        }
        [Authorize(Roles = "Admin")]
        [HttpPost("add")]
        public ResultDTO AddDiscussion([FromBody] DiscussionDTO model)
        {
            var question = new Discussion
            {
                
                QuestionText = model.QuestionText
                
            };

            question.Options = model.Options.Select(x => new Options
            {
                Discussion = question,
                Counter = x.Counter,
                Value = x.Value
            }).ToList();

            _context.Discussions.Add(question);
            _context.SaveChanges();

            return new ResultDTO
            {
                Message = "OK",
                Status = 200
            };


        }

        [HttpGet("search")]
        public IEnumerable<DiscussionDTO> SearchProduct([FromQuery] string search)
        {
            if (string.IsNullOrWhiteSpace(search))
            {
                return getAllDiscussions();
            }

            search = search.ToLower();
            var discussions = _context.Discussions
                                  .Where(x => x.QuestionText.ToLower().Contains(search))
                                  .Select(x => new DiscussionDTO
                                  {
                                      ID = x.ID,
                                      QuestionText = x.QuestionText
                                      //,
                                      //Options = x.Options
                                  }).ToArray();

            return discussions;
        }
        

        [Authorize(Roles = "Admin")]
        [HttpPost("delete")]
        public IEnumerable<DiscussionDTO> DeleteProduct([FromBody] DeleteDiscussionDTO model)
        {
            var product = _context.Discussions.FirstOrDefault(x => x.ID.Equals(model.Id));

            _context.Discussions.Remove(product);

            _context.SaveChanges();

            return getAllDiscussions();
        }

      
        [HttpGet("{id}")]
        public DiscussionDTO ShowDiscussion(int id)
        {
            var discussion = _context.Discussions.Include(x=>x.Options).FirstOrDefault(x => x.ID.Equals(id));
            var options = discussion.Options.Select(x => new OptionsDTO
            {
                 ID=x.ID,
                Value = x.Value,
                Counter = x.Counter
            }).ToList();

            DiscussionDTO d = new DiscussionDTO { ID = discussion.ID, Options =options, QuestionText = discussion.QuestionText };
            d.Counter = d.Options.Sum(x => x.Counter);
           
            return d;
        }

        [HttpPost("selectAnswer")]
        public DiscussionDTO SelectAnswer([FromBody] SelectedAnswerDTO model)
        {
            var option = _context.Options.Include(x=>x.Discussion).FirstOrDefault(x => x.ID == model.Id);
            option.Counter++;

            _context.SaveChanges();

            var d = option.Discussion;

            var disc = _context.Discussions.Include(x => x.Options).FirstOrDefault(x => x.ID.Equals(d.ID));
            
            var options = disc.Options.Select(x => new OptionsDTO
              {
                  ID = x.ID,
                  Value = x.Value,
                  Counter = x.Counter
              }).ToList();

            var data = new DiscussionDTO { Options = options, QuestionText = d.QuestionText, ID = d.ID,Counter=disc.Options.Sum(x=>x.Counter) };

            return data;
        }
    }
}
