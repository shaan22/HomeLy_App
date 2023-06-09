using PropertyProject.Models;

namespace PropertyInsuranceDLL
{
    public interface IPropertyInsuranceComponent
    {
        Agent GetAgentdetails(int id);
        Customer GetCustomerdetails(int id);
        void UpdateAgentdetials(Agent emp);
        void AddAgent(Agent agent);
        void AddCustomer(Customer customer);
        void UpdateCustomer(Customer customer);
        List<Agent> GetAllAgents();
        List<Customer> GetAllCustomers();
    }
    public class PropertyInsurance : IPropertyInsuranceComponent
    {
        public void AddAgent(Agent agent)
        {
            var context = new AbhisekDbContext();
            context.Agents.Add(agent);
            context.SaveChanges();
        }



        public void AddCustomer(Customer customer)
        {
            var context = new AbhisekDbContext();
            context.Customers.Add(customer);
            context.SaveChanges();
        }



        public Customer GetCustomerdetails(int id)
        {
            var context = new AbhisekDbContext();
            var Customer = context.Customers.FirstOrDefault(i => i.Id == id);
            if (Customer != null)
            {
                return Customer;
            }
            else
            {
                throw new Exception("No Customer Found");
            }
        }
        public Agent GetAgentdetails(int id)
        {
            var context = new AbhisekDbContext();
            var agent = context.Agents.FirstOrDefault(i => i.Id == id);
            if (agent != null)
            {
                return agent;
            }
            else
            {
                throw new Exception("No Matching Agent Found!");
            }



        }



        public void UpdateAgentdetials(Agent emp)
        {
            var context = new AbhisekDbContext();
            var data = context.Agents.FirstOrDefault(i => i.Id == emp.Id);
            if (data != null)
            {
                data.Name = emp.Name;
                data.Email = emp.Email;
                data.Phone = emp.Phone;
                data.WorkLocation = emp.WorkLocation;
                context.SaveChanges();
            }
            else
            {
                throw new Exception("No Agent Found to Update");
            }
        }



        public void UpdateCustomer(Customer customer)
        {
            var context = new AbhisekDbContext();
            var data = context.Customers.FirstOrDefault(i => i.Id == customer.Id);
            if (data != null)
            {
                data.Name = customer.Name;
                data.YearOfTenure = customer.YearOfTenure;
                data.CostOfProperty = customer.CostOfProperty;
                data.City = customer.City;
                data.Email = customer.Email;
                data.Phone = customer.Phone;
                data.Salary = customer.Salary;
                context.SaveChanges();
            }
            else
            {
                throw new Exception("No Customer Found!");
            }
        }



        public List<Agent> GetAllAgents()
        {
            var context = new AbhisekDbContext();
            var data = context.Agents.ToList();
            return data;
        }

        public List<Customer> GetAllCustomers()
        {
            var context = new AbhisekDbContext();
            var data = context.Customers.ToList();
            return data;
        }
    }
}