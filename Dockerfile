# Environment
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS base

# Working directory in container
WORKDIR /

# Container user
USER app

# Container ports
EXPOSE 8080
EXPOSE 8081

# Software development kit
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build-server

# Copy project files
COPY ./Core.Database/Core.Database.csproj /src/Core.Database/
COPY ./Core.DAL/Core.DAL.csproj /src/Core.DAL/
COPY ./Core.BLL/Core.BLL.csproj /src/Core.BLL/
COPY ./Core.WebApi/Core.WebApi.csproj /src/Core.WebApi/
COPY ./Core.Server/Core.Server.csproj /src/Core.Server/

# Restore dependencies
RUN dotnet restore /src/Core.Server/Core.Server.csproj

# Copy everything from Dockerfile directory to container directory and build the server
COPY ./ /src

# Publish .net app to out folder
RUN dotnet publish /src/Core.Server/Core.Server.csproj --configuration Release --output /src/Core.Server/out


# Clients
#20.12.2-alpine3.19
FROM node:24.11.0-alpine3.22 AS build-client

# Install webpack, angularcli and rollup
RUN npm install webpack-cli -g && \
	npm install webpack -g && \
	npm install @angular/cli -g

#Vue client
COPY ./Core.Vue.UI /uisrc/Core.Vue.UI

WORKDIR /uisrc/Core.Vue.UI
RUN rm -rf node_modules package-lock.json && \
	npm install && \
	npm install --save-dev @rollup/rollup-linux-x64-musl && \
	npm run build:prod

#Angular client
COPY ./Core.Angular.UI /uisrc/Core.Angular.UI

WORKDIR /uisrc/Core.Angular.UI
RUN rm -rf node_modules package-lock.json && \
	npm install && \
	npm run build:prod

#React client
COPY ./Core.React.UI /uisrc/Core.React.UI

WORKDIR /uisrc/Core.React.UI
RUN rm -rf node_modules package-lock.json && \
	npm install && \
	npm run build:prod

# Image
FROM base
COPY --from=build-server /src/Core.Server/out /
COPY --from=build-server /src/Core.Server/aspnetapp.pfx /aspnetapp.pfx
COPY --from=build-client /uisrc/Core.Angular.UI/out /client/angular
COPY --from=build-client /uisrc/Core.React.UI/out /client/react
COPY --from=build-client /uisrc/Core.Vue.UI/out /client/vue

ENTRYPOINT ["dotnet", "Core.Server.dll"]
