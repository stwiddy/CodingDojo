#pragma warning disable CS8618
namespace DojoSurvey.Models;
using System.ComponentModel.DataAnnotations;

public enum LanguageEnum
{ 
    [Display(Name = "C#")]
    CSharp,
    [Display(Name = "Python")]
    Python,
    [Display(Name = "JavaScript")]
    JavaScript,
}
