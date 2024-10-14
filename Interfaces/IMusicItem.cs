using System;
namespace REACT_MusicScale.Interfaces
{
	public interface IMusicItem
	{
		string? Note { get; set;}
		List<string>? ScaleList { get; set; }
		string? ScaleType { get; set; }
	}
}

