# Music Scale Finder

A full-stack app that generates the correct musical scale (major, minor, etc.) based on a user-input note. Built with a C# API, React frontend, and Bootstrap for responsive design.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Requirements](#requirements)
- [Installation](#installation)
- [Running Locally](#running-locally)

## Features
- Input a note and get the corresponding scale.
- Responsive UI built with React and Bootstrap.
- RESTful API for note-to-scale conversion.

## Technologies
- **Backend**: C#, ASP.NET Core
- **Frontend**: React, Bootstrap
- **API**: Custom RESTful API for scale logic

## Requirements
- [.NET SDK](https://dotnet.microsoft.com/download) (version 7.0)
- [Node.js](https://nodejs.org/) (version 14.x or later)
- Code editor of choice (e.g., Visual Studio, VS Code)

## Installation
1. **Create Project Folder**:
   ```
   project-folder-name
   ```
2. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/music-scale-finder.git
   ```
## Running Locally

To run the application locally, follow these steps:

1. **Start the App**:
   - Open a terminal and navigate to the backend folder (e.g., `/MusicScaleApi`).
   - Run the following command to start the API and Frontend:
     ```bash
     dotnet run
     ```
   - The API should now be running on `http://localhost:44417` (or a different port if specified).
