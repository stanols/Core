# Environment
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base

WORKDIR /

USER app

EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build-server

# Install
RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y nodejs

# Server
COPY . /coresrc

RUN dotnet restore /coresrc/Core.Server/Core.Server.csproj

RUN dotnet publish /coresrc/Core.Server/Core.Server.csproj --configuration Release --output /coresrc/Core.Server/out

# Client
FROM node:20.12.2-alpine AS build-client

RUN npm install webpack-cli -g && \
	npm install webpack -g && \
	npm install -g @angular/cli

COPY ./Core.Angular.UI /coreuisrc/Core.Angular.UI

WORKDIR /coreuisrc/Core.Angular.UI
RUN npm install && npm run build:prod

# Image
FROM base
COPY --from=build-client /coreuisrc/Core.Angular.UI/out /app/client/angular
COPY --from=build-server /coresrc/Core.Server/out /app

ENTRYPOINT ["dotnet", "Core.Server.dll"]
