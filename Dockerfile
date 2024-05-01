# Environment
FROM mcr.microsoft.com/dotnet/sdk:8.0 as build-env

# Install
RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y nodejs \
	npm
WORKDIR /

# Copy
COPY ./Core.Server/Core.Server.csproj ./Core.Server/
COPY ./Core.WebApi/Core.WebApi.csproj ./Core.WebApi/
COPY ./Core.BLL/Core.BLL.csproj ./Core.BLL/
COPY ./Core.DAL/Core.DAL.csproj ./Core.DAL/
COPY ./Core.Angular.UI ./Core.Angular.UI
COPY ./Core.React.UI ./Core.React.UI
COPY ./Core.Server.sln ./
COPY ./Core.Server/appsettings.json ./Core.Server/appsettings.json

# Build & Restore
RUN npm install webpack-cli -g
RUN npm install webpack -g

WORKDIR /Core.Angular.UI
RUN npm install && npm run build:dev

WORKDIR /Core.React.UI
RUN npm install && npm run build:dev

WORKDIR /Core.Server
RUN dotnet restore ./Core.Server.csproj
COPY . .

# Publish
WORKDIR /
RUN dotnet publish ./Core.Server/Core.Server.csproj --configuration Debug --output out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 as base
WORKDIR /
COPY --from=build-env ./out .
EXPOSE 8080
EXPOSE 8081
EXPOSE 443
EXPOSE 3000
ENTRYPOINT ["dotnet", "Core.Server.dll"]
