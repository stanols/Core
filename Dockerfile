# Environment
FROM mcr.microsoft.com/dotnet/sdk:8.0 as build-env
EXPOSE 80
EXPOSE 443
EXPOSE 3000

# Installation
RUN apt-get update && apt-get upgrade -y && \
	apt-get install -y nodejs \
	npm
WORKDIR /

# Copy and restore dependencies
COPY ./Core.Server/Core.Server.csproj ./Core.Server/
COPY ./Core.WebApi/Core.WebApi.csproj ./Core.WebApi/
COPY ./Core.BLL/Core.BLL.csproj ./Core.BLL/
COPY ./Core.DAL/Core.DAL.csproj ./Core.DAL/
COPY ./Core.Angular.UI ./Core.Angular.UI
COPY ./Core.React.UI ./Core.React.UI
COPY ./Core.Server.sln ./
RUN dotnet restore ./Core.Server/Core.Server.csproj

# Copy all and build UI
#webpack --mode=none
#webpack --mode=none

RUN npm install webpack-cli -g
RUN npm install webpack -g

WORKDIR /Core.Angular.UI
RUN npm install 
RUN npm run build:dev

WORKDIR /Core.Angular.UI
RUN npm install
RUN npm run build:dev

# Publish
WORKDIR /
RUN dotnet publish ./Core.Server/Core.Server.csproj --configuration Release --framework net8.0 --self-contained false --output /out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0
WORKDIR /
COPY --from=build-env ./out .
ENTRYPOINT ["dotnet", "./Core.Server/Core.Server.dll"]
