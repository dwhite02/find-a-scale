using System;
namespace REACT_MusicScale.Models
{
    public class MusicCollection
    {
        public string[] musicalNotesSharp = { "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B" };
        public string[] musicalNotesFlat = { "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B" };

        public Dictionary<string, string> sharpToFlat = new Dictionary<string, string>()
        {
            {"C", "Dbb"},
            {"C#", "Db"},
            {"D", "Ebb"},
            {"D#", "Eb"},
            {"E", "Fb"},
            {"F", "Gbb"},
            {"F#", "Gb"},
            {"G", "Abb"},
            {"G#", "Ab"},
            {"A", "Bbb"},
            {"A#", "Bb"},
            {"B", "Cb"}
        };

        public Dictionary<string, string> flatToSharp = new Dictionary<string, string>()
        {
            {"C", "B#"},
            {"Db", "C#"},
            {"D", "C##"},
            {"Eb", "D#"},
            {"E", "D##"},
            {"F", "E#"},
            {"Gb", "F#"},
            {"G", "F##"},
            {"Ab", "G#"},
            {"A", "G##"},
            {"Bb", "A#"},
            {"B", "A##"},
        };

        public Dictionary<string, string> relativeMajor = new Dictionary<string, string>()
        {
            {"A", "C"},
            {"E", "G"},
            {"B", "D"},
            {"F#", "A"},
            {"C#", "E"},
            {"G#", "B"},
            {"D#", "F#"},
            {"Bb", "Db"},
            {"F", "Ab"},
            {"C", "Eb"},
            {"G", "Bb"},
            {"D", "F"}
        };
    }

}

