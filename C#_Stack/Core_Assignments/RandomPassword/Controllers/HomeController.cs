using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using RandomPassword.Models;

namespace RandomPassword.Controllers;

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

    [HttpPost("/Generate")]

    public IActionResult Generate()
    {
        int? visitCount = HttpContext.Session.GetInt32("Num_Generated");
        if (visitCount == null)
        {
            visitCount = 0;
        }
        visitCount++;
        Random rand = new Random();
        string TempPassword = "";
        string charMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*.,./_-abcdefehijklmnopqrstuvwxyz";
        for (int i = 0; i < 14; i++)
        {
            int letNum = rand.Next(charMap.Length);
            TempPassword += charMap[letNum];
        }
        HttpContext.Session.SetString("RandomPassword", TempPassword);
        string? PassString = HttpContext.Session.GetString("RandomPassword");
        HttpContext.Session.SetInt32("NumberGenerated", (int)visitCount);
        int? intGen = HttpContext.Session.GetInt32("NumberGenerated");
        return RedirectToAction("Index");
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }


}
