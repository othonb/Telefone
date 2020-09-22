using System;
using System.Collections.Generic;
using System.Text;
using Examples.Charge.Domain.Aggregates.PersonAggregate;

namespace Examples.Charge.Application.Dtos
{
    public class PhoneNumberTypeDto
    {
        public int PhoneNumberTypeID { get; set; }

        public string Name { get; set; }

        // public List<PersonPhone> Phones { get; set; }
    }
}
