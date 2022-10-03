#pragma warning disable CS8618
namespace DojoSurvey.Models;
using System.ComponentModel.DataAnnotations;

public enum LocationEnum
{ 
    [Display(Name = "San Jose")]
    SanJose,
    [Display(Name = "Online")]
    Online,
}
