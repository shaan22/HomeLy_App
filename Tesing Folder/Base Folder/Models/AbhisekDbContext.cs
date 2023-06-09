using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace PropertyProject.Models;

public partial class AbhisekDbContext : DbContext
{
    public AbhisekDbContext()
    {
    }

    public AbhisekDbContext(DbContextOptions<AbhisekDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Agent> Agents { get; set; }

    public virtual DbSet<Customer> Customers { get; set; }

    public virtual DbSet<Signup> Signups { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)

        => optionsBuilder.UseSqlServer("Server=W-674PY03-1;Database=AbhisekDb;Persist Security Info=True;User ID=sa;Password=Password@12345;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Agent>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Agents__3214EC076451621B");

            entity.Property(e => e.Email)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(40)
                .IsUnicode(false);
            entity.Property(e => e.WorkLocation)
                .HasMaxLength(40)
                .IsUnicode(false);
        });

        modelBuilder.Entity<Customer>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Customer__3214EC076ECF53C1");

            entity.ToTable(tb => tb.HasTrigger("SignUp_Request"));

            entity.Property(e => e.City)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Email)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Name)
                .HasMaxLength(200)
                .IsUnicode(false);
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .IsUnicode(false);
            entity.Property(e => e.Salary).HasColumnType("money");

            entity.HasOne(d => d.Agent).WithMany(p => p.Customers)
                .HasForeignKey(d => d.AgentId)
                .HasConstraintName("FK__Customers__Agent__4BAC3F29");
        });

        modelBuilder.Entity<Signup>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PK__Signups__3214EC07B2936FA6");

            entity.Property(e => e.Id).ValueGeneratedOnAdd();
            entity.Property(e => e.Email).IsUnicode(false);
            entity.Property(e => e.Password).IsUnicode(false);

            entity.HasOne(d => d.IdNavigation).WithOne(p => p.Signup)
                .HasForeignKey<Signup>(d => d.Id)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK__Signups__Id__4E88ABD4");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
