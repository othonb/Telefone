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
    public class PersonPhoneController : BaseController
    {
        private IPersonPhoneFacade _facade;

        private readonly ExampleContext _context;

        public PersonPhoneController(IPersonPhoneFacade facade, ExampleContext context, IMapper mapper)
        {
            _facade = facade;

            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<PersonPhoneResponse>> Get() {

            var resposta = await _facade.FindAllAsync();


            return Response(resposta);


        }

        [HttpGet("{BusinessEntityID}/{PhoneNumber}/{PhoneNumberTypeID}")]
        public ActionResult<string> Get(int BusinessEntityID, string PhoneNumber, int PhoneNumberTypeID)
        {
            try {

                var numero = _context.PersonPhone.Find(BusinessEntityID, PhoneNumber, PhoneNumberTypeID).PhoneNumber;

                return Content(numero);

            } catch (Exception) {

                return NotFound("Registro não encontrado!");

            }
        }

        [HttpPost("{BusinessEntityID}/{PhoneNumber}/{PhoneNumberTypeID}")]
        public ActionResult<string> Post([FromBody] PersonPhone newPersonPhone, int businessEntityID, int phoneNumberTypeID, string phoneNumber)
        {
            try {

                var phonePerson = new PersonPhone {
                    PhoneNumberTypeID = newPersonPhone.PhoneNumberTypeID,
                    PhoneNumber = newPersonPhone.PhoneNumber,
                    BusinessEntityID = newPersonPhone.BusinessEntityID
                };

                _context.Add<PersonPhone>(phonePerson);

                _context.SaveChanges();

                var phonePerson1 = _context.PersonPhone.Single(a => a.PhoneNumberTypeID == phoneNumberTypeID && a.PhoneNumber == phoneNumber && a.BusinessEntityID == businessEntityID);

                _context.PersonPhone.Remove(phonePerson1);

                _context.SaveChanges();

                return Content("Registro de telefone por pessoa atualizado com sucesso!");

            } catch (Exception) {

                return NotFound("Registro de telefone por pessoa não encontrado!");

            }
        }

        [HttpPut("{BusinessEntityID}/{PhoneNumber}/{PhoneNumberTypeID}")]
        public ActionResult<string> Put(int businessEntityID, int phoneNumberTypeID, string phoneNumber)
        {
            try {

                var phonePerson = new PersonPhone {PhoneNumberTypeID = phoneNumberTypeID, PhoneNumber = phoneNumber, BusinessEntityID = businessEntityID};

                _context.Add<PersonPhone>(phonePerson);

                _context.SaveChanges();

                return Content("Registro de telefone por pessoa inserido com sucesso!");

            } catch (Exception) {

                return NotFound("Registro de telefone por pessoa não encontrado!");

            }
        }

        [HttpDelete("{BusinessEntityID}/{PhoneNumber}/{PhoneNumberTypeID}")]
        public ActionResult<string> Delete(int BusinessEntityID, int PhoneNumberTypeID, string PhoneNumber)
        {
            try {

                var phonePerson = _context.PersonPhone.Single(a => a.PhoneNumberTypeID == PhoneNumberTypeID && a.PhoneNumber == PhoneNumber && a.BusinessEntityID == BusinessEntityID);

                _context.PersonPhone.Remove(phonePerson);

                _context.SaveChanges();

                return Content("Registro de telefone por pessoa removido com sucesso!");

            } catch (Exception) {

                return NotFound("Registro de telefone por pessoa não encontrado!");

            }
        }
    }
}
