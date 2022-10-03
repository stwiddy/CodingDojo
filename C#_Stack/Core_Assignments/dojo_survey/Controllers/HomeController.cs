using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using DojoSurvey.Models;


namespace DojoSurvey.Controllers;


public class HomeController : Controller
{

private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }


    public IActionResult Index() 
    {
        return View();
    }

  [HttpPost("/Home/submit")]
    public IActionResult SubmitForm(User newUser)
    {
        if(ModelState.IsValid)
        {
            return View("Result", newUser);
        }
        else
        {
            return View("Index");
        }
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}