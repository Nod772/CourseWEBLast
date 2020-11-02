using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BaseJWTApplication819.DataAccess;
using BaseJWTApplication819.DTO.Models;
using BaseJWTApplication819.DTO.Models.Results;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BaseJWTApplication819.Api_Angular.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly EFContext _context;
        public ProductController(EFContext context)
        {
            _context = context;
        }

        //[Authorize(Roles ="Admin")]
        //[HttpGet]
        //public List<OptionsDTO> getAllProducts()
        //{
        //    var data = _context.Products.Select(t => new OptionsDTO
        //    {
        //        Id = t.Id,
        //        Description = t.Description,
        //        Title = t.Title,
        //        Image = t.ImageURL,
        //        Price = t.Price

        //    }).ToList();
        //    return data;
        //}
        //[Authorize(Roles ="Admin")]
        //[HttpGet("addProduct")]
        //public async Task<ResultDTO> addProduct([FromBody]UserLoginDTO model) 
        //{
        //    return new ResultDTO
        //    {
        //        Message = "OK",
        //        Status = 200
        //    };
        
        
        //}
    }
}
