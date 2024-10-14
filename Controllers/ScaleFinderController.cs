using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using REACT_MusicScale.Interfaces;
using REACT_MusicScale.Services;

namespace REACT_MusicScale.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ScaleFinderController : ControllerBase
    {
        private readonly IScaleMakerService _scaleMakerService;

        public ScaleFinderController(IScaleMakerService scaleMakerService)
        {
            _scaleMakerService = scaleMakerService;
        }

        // GET: api/ScaleFinder
        //[HttpGet]
        //public IEnumerable<string> Get()
        //{
        //    return new string[] { "value1", "value2" };
        //}


        // GET: api/ScaleFinder/"C"
        [HttpGet("MajorScale/{note}")]
        public IActionResult GetMajorScale(string note)
        {
            if (!String.IsNullOrEmpty(ScaleMakerService.NoteExists(note)))
            {
                return Ok(_scaleMakerService.FindMajor(note));
            }
            else
            {
                return NotFound();
            }
        }

        [HttpGet("NaturalMinorScale/{note}")]
        public IActionResult GetNaturalMinorScale(string note)
        {
            if (!String.IsNullOrEmpty(ScaleMakerService.NoteExists(note)))
            {
                return Ok(_scaleMakerService.FindNaturalMinor(note));
            }
            else
            {
                return NotFound();
            }

        }

        [HttpGet("MelodicMinorScale/{note}")]
        public IActionResult GetMelodicMinorScale(string note)
        {
            if (!String.IsNullOrEmpty(ScaleMakerService.NoteExists(note)))
            {
                return Ok(_scaleMakerService.FindMelodicMinor(note));
            }
            else
            {
                return NotFound();
            }

        }

        [HttpGet("HarmonicMinorScale/{note}")]
        public IActionResult GetHarmonicMinorScale(string note)
        {
            if (!String.IsNullOrEmpty(ScaleMakerService.NoteExists(note)))
            {
                return Ok(_scaleMakerService.FindHarmonicMinor(note));
            }
            else
            {
                return NotFound();
            }

        }

        //// POST: api/ScaleFinder
        //[HttpPost]
        //public void Post([FromBody] string value)
        //{
        //}

        //// PUT: api/ScaleFinder/5
        //[HttpPut("{id}")]
        //public void Put(int id, [FromBody] string value)
        //{
        //}

        //// DELETE: api/ScaleFinder/5
        //[HttpDelete("{id}")]
        //public void Delete(int id)
        //{
        //}
    }
}
