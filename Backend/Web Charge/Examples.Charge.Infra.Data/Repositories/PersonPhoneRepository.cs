using Examples.Charge.Domain.Aggregates.PersonAggregate;
using Examples.Charge.Domain.Aggregates.PersonAggregate.Interfaces;
using Examples.Charge.Infra.Data.Context;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Linq;

namespace Examples.Charge.Infra.Data.Repositories
{
    public class PersonPhoneRepository : IPersonPhoneRepository
    {
        private readonly ExampleContext _context;

        public PersonPhoneRepository(ExampleContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        public async Task<IEnumerable<PersonPhone>> FindAllAsync() => await Task.Run(() => {


            var context = _context.PersonPhone;

            foreach(PersonPhone p in context) {

                p.Person = new Person();

                p.Person = _context.Person.Find(p.BusinessEntityID);

                p.PhoneNumberType = new PhoneNumberType();

                p.PhoneNumberType = _context.PhoneNumberType.Find(p.PhoneNumberTypeID);

            }

            return context;


        });
    }
}
