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
FROM node:20.12.2-alpine3.19 AS build-client

# Install webpack, angularcli and rollup
RUN npm install webpack-cli -g && \
	npm install webpack -g && \
	npm install @angular/cli -g

#Vue client
COPY ./Core.Vue.UI /coreuisrc/Core.Vue.UI

WORKDIR /coreuisrc/Core.Vue.UI
RUN rm -rf node_modules package-lock.json && \
	npm install && \
	npm install --save-dev @rollup/rollup-linux-x64-musl && \
	npm run build:prod

#Angular client
COPY ./Core.Angular.UI /coreuisrc/Core.Angular.UI

WORKDIR /coreuisrc/Core.Angular.UI
RUN rm -rf node_modules package-lock.json && \
	npm install && \
	npm run build:prod

#React client
COPY ./Core.React.UI /coreuisrc/Core.React.UI

WORKDIR /coreuisrc/Core.React.UI
RUN rm -rf node_modules package-lock.json && \
	npm install && \
	npm run build:prod

# Image
FROM base
COPY --from=build-client /coreuisrc/Core.Angular.UI/out /app/client/angular
COPY --from=build-client /coreuisrc/Core.React.UI/out /app/client/react
COPY --from=build-client /coreuisrc/Core.Vue.UI/out /app/client/vue
COPY --from=build-server /coresrc/Core.Server/aspnetapp.pfx /app/aspnetapp.pfx
COPY --from=build-server /coresrc/Core.Server/out /app

ENTRYPOINT ["dotnet", "Core.Server.dll"]
