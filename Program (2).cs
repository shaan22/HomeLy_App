using PropertyInsurance;
using InsuranceLib.Data;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
const string policyname = "myPolicy";
// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddTransient<LoanExplorer, LoanExplorer>();
builder.Services.AddTransient<AgentExplorer, AgentExplorer>();
builder.Services.AddTransient<SignInExplorer, SignInExplorer>();
builder.Services.AddCors((options) =>
{
    options.AddPolicy(policyname, (options) =>
    {
        options.AllowAnyHeader()
            .AllowAnyOrigin()
            .AllowAnyMethod();
    });
});
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors(policyname);
/////Customer Data Accesser
app.MapGet("/Customer/{id}", (int id, LoanExplorer com) =>
{
    return com.CustomerdetailsbyId(id);
});
app.MapPost("/Customer", (Customer pb, LoanExplorer com) =>
{
    com.AddingCustomer(pb);
});

app.MapGet("/Customers", (LoanExplorer com) =>
{
    return com.GetAllCustomers();
});
app.MapPut("/Customer/{cus}", (Customer cus, LoanExplorer com) =>
{
    com.UpdatingCustomer(cus);
});
///Agent Data Accesser..
app.MapGet("/agent", (AgentExplorer com) =>
{
    return com.GetAgents();
});
app.MapGet("/Agent/{id}", (int id, AgentExplorer com) =>
{
    return com.AgentdetailsById(id);
});
app.MapPost("/Agent", (Agent pb, AgentExplorer com) =>
{
    com.AddingAgent(pb);
});
app.MapPut("/Agent/{agent}", (Agent agent, AgentExplorer com) =>
{
    com.UpdatingAgentdetials(agent);
});

/// Login Data accesser..
app.MapPut("/SignUp/{data}", (Signup data, SignInExplorer com) =>
{
    com.SignInUpdateRequest(data);
});
app.MapPost("/Login", (Signup data, SignInExplorer com) =>
{
    return com.SignInApprove(data);
});
app.MapPost("/SignUp", (Signup data, SignInExplorer com) =>
{
    com.SignInAddRequest(data);
});
app.MapGet("/SignUp/{email}", (string email, SignInExplorer com) =>
{
    return com.CustomerdetailsbyEmail(email);
});

app.Run();

