using PropertyInsuranceDLL;
using PropertyProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestProject
{
    public class InsuranceServiceFake : IPropertyInsuranceComponent
    {
        private readonly List<Agent> agents;
        private readonly List<Customer> customers;
        public InsuranceServiceFake()
        {
            agents = new List<Agent>()
            {
                new Agent() { Id = 1, Name = "Abhisek", Email="sa@gmail.com", Phone=6543789065, WorkLocation="Bhubaneswar" },
                new Agent() { Id = 2, Name = "Junaid", Email="jm@gmail.com", Phone=7890452436, WorkLocation="Roorkee" },
                new Agent() { Id = 3, Name = "Navdeep", Email="ns@gmail.com", Phone=8097654908, WorkLocation="Chandigarh" }
            };

            customers = new List<Customer>()
            {
                new Customer() { Id = 1,Name = "Abhisek", Email = "sa@gmail.com", Phone = 6806425357, Salary= 80000, YearOfTenure=2, CostOfProperty= 7600000, City = "Bhubaneswar", Password="sa@1",AgentId=2},
                new Customer() { Id = 2,Name = "Junaid", Email = "jm@gmail.com", Phone = 6806987357, Salary= 70000, YearOfTenure=3, CostOfProperty= 7500000, City = "Roorkee", Password="jm@1",AgentId=1},
                new Customer() { Id = 1,Name = "Charan", Email = "cs@gmail.com", Phone = 6806429327, Salary= 75000, YearOfTenure=3, CostOfProperty= 6700000, City = "Bangalore", Password="cs@1",AgentId=3}
            };
        }

        public void AddAgent(Agent agent)
        {
            throw new NotImplementedException();
        }

        public void AddCustomer(Customer customer)
        {
            throw new NotImplementedException();
        }

        public Agent GetAgentdetails(int id)
        {
            throw new NotImplementedException();
        }

        public List<Agent> GetAllAgents()
        {
            return agents;
        }

        public List<Customer> GetAllCustomers()
        {
            return customers;
        }

        public Customer GetCustomerdetails(int id)
        {
            throw new NotImplementedException();
        }

        public void UpdateAgentdetials(Agent emp)
        {
            throw new NotImplementedException();
        }

        public void UpdateCustomer(Customer customer)
        {
            throw new NotImplementedException();
        }
    }
}
