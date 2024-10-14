using System;
namespace REACT_MusicScale.Interfaces
{
	public interface IScaleMakerService
	{
        ScaleResult FindMajor(string note);
        ScaleResult FindNaturalMinor(string note);
        ScaleResult FindHarmonicMinor(string note);
        ScaleResult FindMelodicMinor(string note);
    }
}

