
using InsuranceLib.Data;
using Microsoft.EntityFrameworkCore.Update;
using System.ComponentModel.DataAnnotations;

namespace InsuranceLib
{
    interface ILoanComponent
    {

        Customer GetCustomerdetails(int id);


        void AddCustomer(Customer customer);
        void UpdateCustomer(Customer customer);


    }
    interface IAgentComponent
    {
        List<Agent> GetAllAgents();
        void UpdateAgentdetials(Agent emp);
        Agent GetAgentdetails(int id);
        void AddAgent(Agent agent);
    }
    interface ILoginComponent
    {
        void AddSignInRequest(Signup data);
        void UpdateSignInRequest(Signup data);
        Signup GetSignInRequest(Signup data);
        Customer CustomerdetailsEmail(string email);
    }
    public class AgentData : IAgentComponent
    {
        public void AddAgent(Agent agent)
        {
            var context = new JunaidContext();
            context.Agents.Add(agent);
            context.SaveChanges();
        }
        public Agent GetAgentdetails(int id)
        {
            var context = new JunaidContext();
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
            var context = new JunaidContext();
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


        public List<Agent> GetAllAgents()
        {
            var context = new JunaidContext();
            var data = context.Agents.ToList();
            return data;
        }

    }
    public class PropertyLoan : ILoanComponent
    {
        public List<Customer> GetCustomers()
        {
            var context = new JunaidContext();
            var data = context.Customers.ToList();
            return data;
        }
       
        public void AddCustomer(Customer customer)
        {
            var context = new JunaidContext();
            context.Customers.Add(customer);
            context.SaveChanges();
        }

        public Customer GetCustomerdetails(int id)
        {
            var context = new JunaidContext();
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
       

       
        public void UpdateCustomer(Customer customer)
        {
            var context = new JunaidContext();
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


        
    }

    public class LoginComponent : ILoginComponent
    {
        public void AddSignInRequest(Signup data)
        {
            var context = new JunaidContext();
            context.Signups.Add(data);
            context.SaveChanges();
        }
        public void UpdateSignInRequest(Signup data)
        {
            var context = new JunaidContext();
            var got = context.Signups.FirstOrDefault(i => i.Id == data.Id);
            if (got != null)
            {
                got.Email = data.Email;
                got.Password = data.Password;
                context.SaveChanges();
            }
            else
            {
                throw new Exception("No data to Update");
            }
        }

        public Signup GetSignInRequest(Signup data)
        {
            var context = new JunaidContext();
            var fetchdata = context.Signups.FirstOrDefault(i => i.Email == data.Email);
            if (fetchdata != null)
            {
                if (fetchdata.Password == data.Password)
                {
                    return fetchdata;
                }
                else
                {
                    throw new Exception("Wrong Password!!");
                }
            }
            else
            {
                throw new Exception("No EmailId Found!");
            }
        }

        public Customer CustomerdetailsEmail(string email)
        {
            var context = new JunaidContext();
            var data = context.Customers.FirstOrDefault(i => i.Email == email);
            if (data != null)
            {

                return data;
            }
            else { throw new Exception("No Customer Found ! Please Register"); }
        }
    }
}

