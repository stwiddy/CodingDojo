#pragma warning disable CS8618
using System.ComponentModel.DataAnnotations;
namespace DojoSurvey.Models;

public class User
{
    [Required(ErrorMessage = "Name is required.")]
    [MinLength(2, ErrorMessage = "Name must be at least 2 characters.")]
    [Display(Name = "Your Name:")]
    [DataType(DataType.Text)]
    public string Name { get; set; }

    [Required(ErrorMessage = "Location is required.")]
    [Display(Name = "Dojo Location:")]
    [DataType(DataType.Text)]
    public LocationEnum EnumLocation { get; set; }

    [Required(ErrorMessage = "Language is required.")]
    [Display(Name = "Favorite Language:")]
    [DataType(DataType.Text)]
    public LanguageEnum EnumLanguages { get; set; }

    [MinLength(20, ErrorMessage = "Comment should be more than 20 characters.")]
    [Display(Name = "Comment:")]
    [DataType(DataType.Text)]
    public string? Comment { get; set; }
}