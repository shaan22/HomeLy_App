using System;
using System.Collections.Generic;

namespace PropertyProject.Models;

public partial class Customer
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public string Email { get; set; } = null!;

    public long Phone { get; set; }

    public decimal Salary { get; set; }

    public int YearOfTenure { get; set; }

    public int CostOfProperty { get; set; }

    public string City { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int? AgentId { get; set; }

    public virtual Agent? Agent { get; set; }
}
