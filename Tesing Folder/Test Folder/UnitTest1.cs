using FluentAssertions.Common;
using Microsoft.AspNetCore.Mvc;
using PropertyInsuranceDLL;
using PropertyProject.Controllers;
using PropertyProject.Models;

namespace TestProject
{
    public class UnitTest1
    {
        private readonly AgentController controller;
        private readonly CustomerController controller2;
        private readonly IPropertyInsuranceComponent service;

        public UnitTest1()
        {
            service = new InsuranceServiceFake();
            controller = new AgentController(service);
            controller2 = new CustomerController(service);
        }

        [Fact]
        public void Get_WhenCalled_ReturnsOkResult()
        {
            // Act
            var okResult = controller.Get();
            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void Get_WhenCalled_ReturnsAllItems()
        {
            // Act
            var okResult = controller.Get() as OkObjectResult;
            // Assert
            var items = Assert.IsType<List<Agent>>(okResult.Value);
            Assert.Equal(3, items.Count);
        }


        [Fact]
        public void Get_WhenCalled_ReturnsOkResult1()
        {
            // Act
            var okResult = controller2.GetCustomer();
            // Assert
            Assert.IsType<OkObjectResult>(okResult as OkObjectResult);
        }

        [Fact]
        public void Get_WhenCalled_ReturnsAllItems1()
        {
            // Act
            var okResult = controller2.GetCustomer() as OkObjectResult;
            // Assert
            var items = Assert.IsType<List<Customer>>(okResult.Value);
            Assert.Equal(3, items.Count);
        }

  
    }
}