﻿using System;
using System.Collections.Generic;

namespace PropertyProject.Models;

public partial class Signup
{
    public int Id { get; set; }

    public string? Email { get; set; }

    public string? Password { get; set; }

    public virtual Agent IdNavigation { get; set; } = null!;
}
