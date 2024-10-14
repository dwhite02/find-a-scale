using REACT_MusicScale.Interfaces;
using REACT_MusicScale.Models;

public class ScaleResult
{
    public string? Message { get; set; }
    public MusicScaleItem? MusicItem { get; set; }

    public ScaleResult(string message)
    {
        Message = message;
    }

    public ScaleResult(MusicScaleItem musicItem)
    {
        MusicItem = musicItem;
    }

    public bool IsMessage => Message != null;
}
