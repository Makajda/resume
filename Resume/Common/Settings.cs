namespace Resume.Common;
public class Settings {
    public bool Language { get; set; } = true; // true for Russian, false for English

    public string LnString(string ru, string en) => Language ? ru : en;
}
