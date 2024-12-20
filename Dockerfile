# syntax=docker/dockerfile:1

# Use the .NET SDK image to build the application.
FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:7.0-alpine AS build

# Install Node.js (necessary for npm)
RUN apk add --no-cache nodejs npm

# Copy the project files and restore dependencies
WORKDIR /source
COPY REACT-MusicScale.csproj ./
RUN dotnet restore

# Copy the rest of the application files
COPY . ./

# Build the application and publish it to /app
RUN dotnet publish -c Release -o /app

# Create a runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0-alpine AS final
WORKDIR /app

# Copy the published output from the build stage
COPY --from=build /app .

# Create a non-privileged user for running the application
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/nonexistent" \
    --shell "/sbin/nologin" \
    --no-create-home \
    --uid "${UID}" \
    appuser
USER appuser

# Expose the port
EXPOSE 8080


# Entry point to run the application
ENTRYPOINT ["dotnet", "REACT-MusicScale.dll"]