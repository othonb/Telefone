using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Examples.Charge.Application.Interfaces;
using Examples.Charge.Domain.Aggregates.PersonAggregate;
using Examples.Charge.Application.Messages.Request;
using Examples.Charge.Application.Messages.Response;
using System.Threading.Tasks;
using Examples.Charge.Infra.Data.Context;
using System;
using Microsoft.AspNetCore.Cors;
using System.Linq;

namespace Examples.Charge.API.Controllers
{
    [EnableCors("disableCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class PersonController : BaseController
    {
        private IPersonFacade _facade;

        private readonly ExampleContext _context;

        public PersonController(IPersonFacade facade, ExampleContext context, IMapper mapper)
        {
            _facade = facade;
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<PersonResponse>> Get() => Response(await _facade.FindAllAsync());

        [HttpGet("{BusinessEntityID}")]
        public ActionResult<string> Get(int BusinessEntityID)
        {
            try {

                var nome = _context.Person.Find(BusinessEntityID).Name;

                return Ok(nome);

            } catch (Exception) {

                return NotFound("Pessoa não encontrada!");

            }

        }

        [HttpPost("atualiza")]
        public ActionResult atualizaPost([FromBody] PersonRequest request)
        {
            try {

                var person = _context.Person.Single(a => a.BusinessEntityID == request.BusinessEntityID);

                person.Name = request.Name;

                _context.SaveChanges();

                return Ok("Registro de pessoa atualizado com sucesso!");

            } catch (Exception) {

                return NotFound("Pessoa não encontrada!");

            }
        }

        [HttpPost("insere")]
        public ActionResult inserePost([FromBody] PersonRequest request)
        {
            try {

                var person = new Person {Name = request.Name};

                _context.Add<Person>(person);

                _context.SaveChanges();

                return Ok("Registro de pessoa inserido com sucesso!");

            } catch (Exception) {

                return NotFound("Não foi possível inserir a pessoa!");

            }
        }

        [HttpDelete("{BusinessEntityID}")]
        public ActionResult<string> Delete(int BusinessEntityID)
        {
            try {

                var id = _context.Person.Single(a => a.BusinessEntityID == BusinessEntityID);

                _context.Person.Remove(id);

                _context.SaveChanges();

                return Ok("Pessoa removida com sucesso!!!");

            } catch (Exception) {

                return NotFound("Pessoa não removida!");

            }
        }
    }
}
