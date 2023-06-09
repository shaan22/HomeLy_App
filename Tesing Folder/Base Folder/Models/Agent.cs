using System;
using System.Collections.Generic;

namespace PropertyProject.Models;

public partial class Agent
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public long? Phone { get; set; }

    public string? WorkLocation { get; set; }

    public virtual ICollection<Customer> Customers { get; set; } = new List<Customer>();

    public virtual Signup? Signup { get; set; }
}
