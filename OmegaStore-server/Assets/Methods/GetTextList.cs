using Microsoft.AspNetCore.Mvc.Rendering;

public static class GetTextList
{
    public static string GetGenderText(string value)
    {
        return ValueList.GenderList.FirstOrDefault(v => v.Value == value)?.Text ?? "";
    }

    public static string GetNationText(string value)
    {
        return ValueList.NationList.FirstOrDefault(v => v.Value == value)?.Text ?? "";
    }
}