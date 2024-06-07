namespace Resume.Common;
public class Settings {
    public bool Language { get; set; }

    public string LnString(string ru, string en) => Language ? ru : en;
}
