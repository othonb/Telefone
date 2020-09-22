using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Examples.Charge.Application.Interfaces;
using Examples.Charge.Application.Messages.Request;
using Examples.Charge.Application.Messages.Response;
using System.Threading.Tasks;
using Examples.Charge.Infra.Data.Context;
using System;
using Examples.Charge.Domain.Aggregates.ExampleAggregate;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Examples.Charge.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExampleController : BaseController
    {
        private IExampleFacade _facade;

        private readonly ExampleContext _context;

        public ExampleController(IExampleFacade facade, ExampleContext context, IMapper mapper)
        {
            _facade = facade;

            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<ExampleListResponse>> Get() {

            return Response(await _facade.FindAllAsync());

        }

        [HttpGet("{id}")]
        public ActionResult<string> Get(int id)
        {

            try {

                var nome = _context.Example.Find(id).Nome;

                return Ok(nome);

            } catch (Exception) {

                return NotFound("Exemplo não encontrado!");

            }

        }

        [HttpPost("atualiza")]
        public ActionResult atualizaPost([FromBody] ExampleRequest request)
        {
            try {

                var example = _context.Example.Single(a => a.Id == request.Id);

                example.Nome = request.Nome;

                _context.SaveChanges();

                return Ok("Registro de exemplo atualizado com sucesso!");

            } catch (Exception) {

                return NotFound("Exemplo não encontrada!");

            }
        }

        [HttpPost("insere")]
        public ActionResult inserePost([FromBody] ExampleRequest request)
        {
            try {

                var example = new Example {Nome = request.Nome};

                _context.Add<Example>(example);

                _context.SaveChanges();

                return Ok("Registro de exemplo inserido com sucesso!");

            } catch (Exception) {

                return NotFound("Não foi possível inserir o exemplo!");

            }
        }

        [HttpDelete("{id}")]
        public ActionResult<string> Delete(int id)
        {
            try {

                var exampleId = _context.Example.Single(a => a.Id == id);

                _context.Example.Remove(exampleId);

                _context.SaveChanges();

                return Ok("Exemple removido com sucesso!!!");

            } catch (Exception) {

                return NotFound("Exemplo não removida!");

            }
        }
    }
}
