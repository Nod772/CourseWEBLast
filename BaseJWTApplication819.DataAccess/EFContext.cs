﻿using BaseJWTApplication819.DataAccess.Entity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace BaseJWTApplication819.DataAccess
{
    public class EFContext : IdentityDbContext<User>
    {
        public EFContext(DbContextOptions<EFContext> options) : base(options) { }

        public DbSet<Discussion> Discussions { get; set; }
        public DbSet<Options> Options { get; set; }
        public DbSet<UserAdditionalInfo> UserAdditionalInfos { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasOne(u => u.UserAdditionalInfo)
                .WithOne(t => t.User)
                .HasForeignKey<UserAdditionalInfo>(r => r.Id);

            builder.Entity<Options>().HasOne(u => u.Discussion).WithMany(t => t.Options).OnDelete(DeleteBehavior.Cascade);

            base.OnModelCreating(builder);
        }

    }
}
