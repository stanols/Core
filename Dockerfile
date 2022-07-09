# Environment
FROM microsoft/dotnet:6.0-sdk AS build-env

# Installation
RUN apt-get update && \
	apt-get install -y wget && \
	apt-get install -y gnupg2 && \
	wget -qO- https://deb.nodesource.com/setup_6.x | bash - && \
	apt-get install -y build-essential nodejs
WORKDIR /app

# Copy csproj and restore dependencies
COPY ./Core.Server/Core.Server.csproj ./Core.Server/
COPY ./Core.WebApi/Core.WebApi.csproj ./Core.WebApi/
COPY ./Core.BLL/Core.BLL.csproj ./Core.BLL/
COPY ./Core.DAL/Core.DAL.csproj ./Core.DAL/
COPY ./Core.UI/Core.UI.csproj ./Core.UI/
COPY ./Core.Server.sln .
RUN dotnet restore Core.Server.sln

# Copy all and build UI
COPY . ./

RUN npm install webpack-cli -g
RUN npm install webpack -g
RUN cd /app/Core.UI && npm install && webpack --mode=none

# Publish
RUN cd /app/Core.Server && dotnet publish -v q -c Debug -o out -f netcoreapp6.0

# Build runtime image
FROM microsoft/dotnet:6.0-aspnetcore-runtime
WORKDIR /app
COPY --from=build-env /app/Core.Server/out/ .
ENTRYPOINT ["dotnet", "Core.Server.dll"]