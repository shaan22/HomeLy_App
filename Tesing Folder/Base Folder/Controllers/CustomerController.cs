using Microsoft.AspNetCore.Mvc;
using PropertyInsuranceDLL;

namespace PropertyProject.Controllers
{
    public class CustomerController : Controller
    {
        private readonly IPropertyInsuranceComponent _projectService;
        public CustomerController(IPropertyInsuranceComponent projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        public IActionResult GetCustomer()
        {
            var items = _projectService.GetAllCustomers();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public IActionResult GetCustomerById(int id)
        {
            var item = _projectService.GetCustomerdetails(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }
       
    }
}
