namespace Resume.Common;
public class Settings {
    public bool Language { get; private set; }

    public void SetLanguage() => Language = !Language;

    public string LnString(string ru, string en) => Language ? ru : en;
}
