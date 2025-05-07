using Microsoft.AspNetCore.Mvc.Rendering;

public static class GetTextList
{
    public static string GetGenderText(string value)
    {
        return ValueList.SelectGenderList.FirstOrDefault(v => v.Value == value)?.Text ?? "";
    }

    public static string GetNationText(string value)
    {
        return ValueList.SelectNationList.FirstOrDefault(v => v.Value == value)?.Text ?? "";
    }
}