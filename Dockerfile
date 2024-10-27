# Environment
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

# Working directory in container
WORKDIR /

# Container user
USER app

# Container ports
EXPOSE 8080
EXPOSE 8081

# Software development kit
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-server

# Install nodejs
RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y nodejs

# Copy everything from Dockerfile directory to container directory and build the server
COPY . /coresrc

# Restore dependencies
RUN dotnet restore /coresrc/Core.Server/Core.Server.csproj

# Publish .net app to out folder
RUN dotnet publish /coresrc/Core.Server/Core.Server.csproj --configuration Release --output /coresrc/Core.Server/out

# Client
FROM node:20.12.2-alpine AS build-client

RUN npm install webpack-cli -g && \
	npm install webpack -g && \
	npm install -g @angular/cli

COPY ./Core.Angular.UI /coreuisrc/Core.Angular.UI

WORKDIR /coreuisrc/Core.Angular.UI
RUN npm install && npm run build:prod

COPY ./Core.React.UI /coreuisrc/Core.React.UI

WORKDIR /coreuisrc/Core.React.UI
RUN npm install && npm run build:prod

# Image
FROM base
COPY --from=build-client /coreuisrc/Core.Angular.UI/out /app/client/angular
COPY --from=build-client /coreuisrc/Core.React.UI/out /app/client/react
COPY --from=build-server /coresrc/aspnetapp.pfx /app/aspnetapp.pfx
COPY --from=build-server /coresrc/Core.Server/out /app

ENTRYPOINT ["dotnet", "Core.Server.dll"]
