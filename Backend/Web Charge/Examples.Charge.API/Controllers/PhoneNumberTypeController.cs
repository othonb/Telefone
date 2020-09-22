using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Examples.Charge.Domain.Aggregates.PersonAggregate;
using Examples.Charge.Application.Interfaces;
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
    public class PhoneNumberTypeController : BaseController
    {
        private IPhoneNumberTypeFacade _facade;

        private readonly ExampleContext _context;

        public PhoneNumberTypeController(IPhoneNumberTypeFacade facade, ExampleContext context, IMapper mapper)
        {
            _facade = facade;

            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<PhoneNumberTypeResponse>> Get() => Response(await _facade.FindAllAsync());

        [HttpGet("{PhoneNumberTypeID}")]
        public ActionResult<string> Get(int PhoneNumberTypeID)
        {

            try {

                var nome = _context.PhoneNumberType.Find(PhoneNumberTypeID).Name;

                return Ok(nome);

            } catch (Exception) {

                return NotFound("Tipo de número de telefone não encontrado!");

            }
        }

        [HttpPost("atualiza")]
        public ActionResult atualizaPost([FromBody] PhoneNumberTypeRequest request)
        {
            try {

                var phoneNumber = _context.PhoneNumberType.Single(a => a.PhoneNumberTypeID == request.PhoneNumberTypeID);

                phoneNumber.Name = request.Name;

                _context.SaveChanges();

                return Ok("Registro de tipo de telefone atualizado com sucesso!");

            } catch (Exception) {

                return NotFound("Tipo de telefone não encontrado!");

            }
        }

        [HttpPost("insere")]
        public ActionResult inserePost([FromBody] PhoneNumberTypeRequest request)
        {
            try {

                var phoneNumber = new PhoneNumberType {Name = request.Name};

                _context.Add<PhoneNumberType>(phoneNumber);

                _context.SaveChanges();

                return Ok("Registro de tipo de telefone inserido com sucesso!");

            } catch (Exception) {

                return NotFound("Não foi possível inserir o tipo de telefone!");

            }
        }

        [HttpDelete("{PhoneNumberTypeID}")]
        public ActionResult<string> Delete(int PhoneNumberTypeID)
        {
            try {

                var phoneId = _context.PhoneNumberType.Single(a => a.PhoneNumberTypeID == PhoneNumberTypeID);

                _context.PhoneNumberType.Remove(phoneId);

                _context.SaveChanges();

                return Ok("Tipo de telefone removido com sucesso!!!");

            } catch (Exception) {

                return NotFound("Tipo de telefone não removido!");

            }
        }
    }
}
