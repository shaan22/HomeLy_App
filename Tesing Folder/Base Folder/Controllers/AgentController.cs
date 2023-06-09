using Microsoft.AspNetCore.Mvc;
using PropertyInsuranceDLL;
using PropertyProject.Models;

namespace PropertyProject.Controllers
{
    public class AgentController : Controller
    {
        private readonly IPropertyInsuranceComponent _projectService;
        public AgentController(IPropertyInsuranceComponent projectService)
        {
            _projectService = projectService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var items = _projectService.GetAllAgents();
            return Ok(items);
        }

        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {
            var item = _projectService.GetAgentdetails(id);
            if (item == null)
            {
                return NotFound();
            }
            return Ok(item);
        }
    
    }
}
