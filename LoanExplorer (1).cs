using InsuranceLib;
using InsuranceLib.Data;
using Microsoft.AspNetCore.Components.Forms;

namespace PropertyInsurance
{
    public class LoanExplorer : PropertyLoan
    {
        public List<Customer> GetAllCustomers()
        {
                return GetCustomers();
        }
        public void AddingCustomer(Customer customer)
        {
            AddCustomer(customer);
        }
        public Customer CustomerdetailsbyId(int id)
        {
            return GetCustomerdetails(id);
        }

        public void UpdatingCustomer(Customer customer)
        {
            UpdateCustomer(customer);
        }

    }
    public class AgentExplorer : AgentData
    {
       
        public void AddingAgent(Agent agent)
        {
            AddAgent(agent);
        }
        public Agent AgentdetailsById(int id)
        {
            return GetAgentdetails(id);
        }
        public void UpdatingAgentdetials(Agent emp)
        {
            UpdateAgentdetials(emp);
        }
        public List<Agent> GetAgents()
        {
            return GetAllAgents();
        }


    }
    public class SignInExplorer : LoginComponent
    {
        public void SignInAddRequest(Signup data)
        {
            AddSignInRequest(data);
        }
        public void SignInUpdateRequest(Signup data)
        {
            UpdateSignInRequest(data);
        }
        public Signup SignInApprove(Signup data)
        {
            return GetSignInRequest(data);
        }
        public Customer CustomerdetailsbyEmail(string email)
        {
            return CustomerdetailsEmail(email);
        }

    }
}
