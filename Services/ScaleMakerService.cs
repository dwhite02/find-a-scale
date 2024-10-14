using System;
using REACT_MusicScale.Interfaces;
using REACT_MusicScale.Models;

namespace REACT_MusicScale.Services
{
	public class ScaleMakerService : IScaleMakerService
	{
        private readonly static MusicCollection _mc = new();

		public ScaleResult FindMajor(string note)
		{
            
            int[] pattern = { 2, 2, 1, 2, 2, 2, 1 };
            var scale = ScaleBuilder(note, "major", pattern);

            return new ScaleResult(ScaleTextOutput("Major", note, scale));
        }

        public ScaleResult FindNaturalMinor(string note)
        {

            int[] pattern = { 2, 1, 2, 2, 1, 2, 2 };
            var scale = ScaleBuilder(note, "minor", pattern);

            return new ScaleResult(ScaleTextOutput("Natural Minor", note, scale));
        }

        public ScaleResult FindHarmonicMinor(string note)
        {

            int[] pattern = { 2, 1, 2, 2, 1, 3, 1 };
            var scale = ScaleBuilder(note, "minor", pattern);

            return new ScaleResult(ScaleTextOutput("Harmonic Minor", note, scale));
        }

        public ScaleResult FindMelodicMinor(string note)
        {

            int[] pattern = { 2, 1, 2, 2, 2, 2, 1 };
            var scale = ScaleBuilder(note, "minor", pattern);

            return new ScaleResult(ScaleTextOutput("Melodic Minor", note, scale));
        }

        public static List<string> ScaleBuilder(string note, string scaleType, int[] pattern)
        {
            note = NoteExists(note);
            string mockNote = note;


            if(scaleType == "minor" && note.Length < 2)
            {
                mockNote = _mc.relativeMajor[note];
            }

            // 
            string[] musicalNotes = UseFlatsOrSharps(mockNote, scaleType, out bool useFlats);
            int rootPosition = Array.IndexOf(musicalNotes, note);
            int currPosition = rootPosition;
            List<string> scale = new List<string>();

            // Creates scale
            scale.Add(musicalNotes[currPosition]);
            foreach (int step in pattern)
            {
                currPosition = (currPosition + step) % musicalNotes.Length;
                string nextNote = musicalNotes[currPosition];

                // Ensure no duplicate letters in the scale
                string lastNote = scale[scale.Count - 1];
                if (lastNote[0] == nextNote[0])
                {
                    if (useFlats)
                    {
                        nextNote = _mc.sharpToFlat[nextNote];
                    }
                    else
                    {
                        scale[scale.Count - 1] = _mc.flatToSharp[lastNote];
                    }
                }

                scale.Add(nextNote);
            }

            return scale;
        }

        public static string[] UseFlatsOrSharps( string note, string scaleType, out bool useFlats)
        {
            bool hasFlats = note.Contains("b") || note.Equals("F");
            bool hasdoubleSharps = note.Contains("D#") || note.Contains("G#") || note.Contains("A#");
            useFlats = hasFlats;

            string[] musicalNotes = hasFlats ? _mc.musicalNotesFlat : _mc.musicalNotesSharp;

            if (hasdoubleSharps && scaleType == "major")
            {
                musicalNotes = musicalNotes.Select(n => n.Contains("#") ? n : _mc.flatToSharp[n]).ToArray();
            }

            return musicalNotes;
        }

        public static string NoteExists(string note)
        {
            note = char.ToUpper(note[0]) + note.Substring(1);

            // Does a first check if note exist in the below arrays
            if (!_mc.musicalNotesSharp.Contains(note) && !_mc.musicalNotesFlat.Contains(note))
            {
                // Does a second check if note exists in below dictionaries
                if (_mc.sharpToFlat.ContainsValue(note))
                {
                    var key = _mc.sharpToFlat.FirstOrDefault(x => x.Value == note).Key;
                    return note = key;
                }
                else if (_mc.flatToSharp.ContainsValue(note))
                {
                    var key = _mc.flatToSharp.FirstOrDefault(x => x.Value == note).Key;
                    return note = key;
                }
                else {
                    return "";
                }
            } else
            {
                return note;
            }
            
        }

        public static string ScaleTextOutput(string scaleType ,string note, List<string> scale)
        {
            note = char.ToUpper(note[0]) + note.Substring(1);
            string? disclaimer;

            if (!_mc.musicalNotesSharp.Contains(note) && !_mc.musicalNotesFlat.Contains(note))
            {
                // Notes a suggested scale for notes that do exist but doesn't have a designated scale 
                if (_mc.sharpToFlat.ContainsValue(note) || _mc.flatToSharp.ContainsValue(note))
                {
                    disclaimer = "(Suggested Scale)";
                }
                 else
                {
                    disclaimer = "";
                }
            } else
            {
                disclaimer = "";
            }

            return $"{scaleType} scale for {note} {disclaimer}: \n{string.Join(" ", scale)}";
        }
    }
}

