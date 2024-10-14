using System;
using REACT_MusicScale.Interfaces;

namespace REACT_MusicScale.Models
{
    public class MusicScaleItem : IMusicItem
    {
        public MusicScaleItem(string note, string scaleType, List<string> scaleList )
        {
            Note = note;
            ScaleType = scaleType;
            ScaleList = scaleList;
        }

        public MusicScaleItem(string note, string scaleType, List<string> scaleList, string[] romanNumerals, List<string[]> triadChords, List<string[]> seventhChords)
        {
            Note = note;
            ScaleType = scaleType;
            ScaleList = scaleList;
            RomanNumerals = romanNumerals;
            TriadChords = triadChords;
            SeventhChords = seventhChords;
        }

        public MusicScaleItem(string note, string scaleType, List<string> scaleList, string[] romanNumerals, List<string[]> triadChords, List<string[]> seventhChords, string[] musicalNotes, bool hasFlats)
        {
            Note = note;
            ScaleType = scaleType;
            ScaleList = scaleList;
            RomanNumerals = romanNumerals;
            TriadChords = triadChords;
            SeventhChords = seventhChords;
            MusicalNotes = musicalNotes;
            HasFlats = hasFlats;
        }

        public string? Note { get; set; }
        public string? ScaleType { get; set; }
        public List<string>? ScaleList { get; set;}
        public string[]? RomanNumerals {get; set;}
        public List<string[]>? TriadChords { get; set; }
        public List<string[]>? SeventhChords { get; set; }
        public string[]? MusicalNotes { get; set; }
        public bool HasFlats {get; set;}
    }
}