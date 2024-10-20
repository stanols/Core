# Environment
FROM mcr.microsoft.com/dotnet/aspnet:8.0 as base
WORKDIR /app

USER app

EXPOSE 8080
EXPOSE 8081

FROM mcr.microsoft.com/dotnet/sdk:8.0 as build-server

# Install
RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y nodejs

# Server
WORKDIR /
COPY ./Core.Server/Core.Server.csproj ./Core.Server/
COPY ./Core.WebApi/Core.WebApi.csproj ./Core.WebApi/
COPY ./Core.BLL/Core.BLL.csproj ./Core.BLL/
COPY ./Core.DAL/Core.DAL.csproj ./Core.DAL/
COPY ./Core.Angular.UI ./Core.Angular.UI/
COPY ./Core.React.UI ./Core.React.UI/
COPY ./Core.Server.sln ./
COPY ./Core.Server/appsettings.json ./Core.Server/appsettings.json

WORKDIR /Core.Server
RUN dotnet restore ./Core.Server.csproj
COPY . ./

WORKDIR /
RUN dotnet publish ./Core.Server/Core.Server.csproj --configuration Release --output out

# Client
FROM node:20.12.2-alpine as build-client

RUN npm install webpack-cli -g && \
	npm install webpack -g && \
	npm install -g @angular/cli

WORKDIR /
COPY ./Core.Angular.UI ./

FROM build-client
WORKDIR /
RUN npm install && npm run build:prod

# Image
FROM base as final
WORKDIR /app
COPY --from=build-server ./out ./
COPY --from=build-client ./out ./client/angular
ENTRYPOINT ["dotnet", "Core.Server.dll"]
