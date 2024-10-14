using System;
using System.Collections.Generic;
using System.Linq;
using REACT_MusicScale.Interfaces;
using REACT_MusicScale.Models;

namespace REACT_MusicScale.Services
{
    public class UpdatedScaleMakerService : IScaleMakerService
    {
        private readonly static MusicCollection _mc = new();

        public ScaleResult FindMajor(string note) =>
            FindScale(note, "major", new[] { 2, 2, 1, 2, 2, 2, 1 },
            new[] { "I", "ii", "iii", "IV", "V", "vi", "vii°" });

        public ScaleResult FindNaturalMinor(string note) =>
            FindScale(note, "minor", new[] { 2, 1, 2, 2, 1, 2, 2 },
            new[] { "i", "ii°", "III", "iv", "v", "VI", "VII" });

        public ScaleResult FindHarmonicMinor(string note) =>
            FindScale(note, "minor", new[] { 2, 1, 2, 2, 1, 3, 1 },
            new[] { "i", "ii°", "III+", "iv", "V", "VI", "vii°" });

        public ScaleResult FindMelodicMinor(string note) =>
            FindScale(note, "minor", new[] { 2, 1, 2, 2, 2, 2, 1 },
            new[] { "i", "ii°", "III", "IV", "V", "vi", "vii°" });

        public static ScaleResult FindScale(string note, string scaleType, int[] pattern, string[] romanNumerals)
        {
            note = NoteExists(note);
            string mockNote = GetMockNoteIfMinor(note, scaleType);

            var scale = ScaleBuilder(note, scaleType, pattern);
            var triadChords = GetChords(scale, false); 
            var seventhChords = GetChords(scale, true);
            var musicalNotes = UseFlatsOrSharps(mockNote, scaleType, out bool useFlats); ;

            var musicItem = new MusicScaleItem(note, scaleType == "major" ? "Major" : "Minor", scale, romanNumerals, triadChords, seventhChords, musicalNotes, useFlats);
            

            return new ScaleResult(musicItem);
        }

        public static List<string> ScaleBuilder(string note, string scaleType, int[] pattern)
        {
            note = NoteExists(note);
            string mockNote = GetMockNoteIfMinor(note, scaleType);

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

            scale.RemoveAt(scale.Count - 1);

            return scale;
        }

        public static string[] UseFlatsOrSharps(string note, string scaleType, out bool useFlats)
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

        public static bool UseFlatsOrSharps(string note, string scaleType)
        {
            bool hasFlats = note.Contains("b") || note.Equals("F");
     
            return hasFlats;
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
                else
                {
                    return "";
                }
            }
            else
            {
                return note;
            }

        }

        public static List<string[]> GetChords(List<string> scale, bool includeSeventh)
        {
            List<string[]> chords = new List<string[]>();

            for (int i = 0; i < scale.Count; i++)
            {
                string root = scale[i];
                string third = scale[(i + 2) % scale.Count];
                string fifth = scale[(i + 4) % scale.Count];
                string[] chord;

                if (includeSeventh)
                {
                    string seventh = scale[(i + 6) % scale.Count];
                    chord = new string[] { root, third, fifth, seventh }; // Four notes for seventh chords
                }
                else
                {
                    chord = new string[] { root, third, fifth }; // Three notes for triads
                }

                chords.Add(chord);
            }

            return chords;
        }

        private static string GetMockNoteIfMinor(string note, string scaleType)
        {
            if (scaleType == "minor" && note.Length < 2)
            {
                return _mc.relativeMajor[note];
            }
            return note;
        }


    }
}
