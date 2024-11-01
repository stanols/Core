# Core
<h4>Welcome to Core app!</h4>

<p>The application is designed to compare web frameworks. 
</p>
<p>Software engineers who want to play with both frameworks, test components and try differend architecture tricks, share their ideas and thoughts with other engineers, welcome to my sandbox.</p>


# Guidelines

<h3>Run using Visual Studio (requires "Build react UI", "Build angular UI", "Create database" steps below)</h3>

1. Set {basePath}/Core/Core.Server as startup project

2. Run (F5). Check if server is available

<h3>Run using Docker</h3>

Make sure host networking is enabled

```
docker compose up
```

<h3>URLs:</h3>

```
http://localhost:8080/react/
http://localhost:8080/angular/
https://localhost:8081/react/
https://localhost:8081/angular/
```

<h3>Credentials:</h3>

Use the following credentials to log in
```
username: nmatch
password: montenegro44
```
or
```
username: katatinak
password: montenegro44
```

<h3>Build react UI</h3>

1. Install npm packages specified in {basePath}/Core/Core.React.UI/package.json
```
npm install --only=dev
npm install
```

2. Build UI with webpack
for development environment
```
npm run build
```
for development environment in watch mode
```
npm run build:watch
```
for production environment
```
npm run build:prod
```

<h3>Build angular UI</h3>

1. Install npm packages specified in dev {basePath}/Core/Core.Angular.UI/package.json

2. Build UI
for dev environment
```
npm run build
```
for development environment in watch mode
```
npm run build:watch
```
for production environment
```
npm run build:prod
```

<h3>Create database</h3>

1. To get started you will need to install postgres sql server v10 or higher with default settings (port=5432, user=postgres password=password1) or create database using docker container (step 2)
```
https://www.postgresql.org/download/
```

2. Create database according to connection string specified in {basePath}/Core/Core.DAL/appsettings.json, docker example

```
docker run --rm --name postgres -e POSTGRES_PASSWORD=password1 -p 5432:5432 -e POSTGRES_DB=coredb -d clkao/postgres-plv8
```

3. Apply migrations. Open Package Manager Console in Visual Studio or (Command Prompt, Powershell etc.) and change directory to the Server.Server folder (optional)
```
cd {basePath}/Core/
```

4. Apply migrations
```
dotnet ef database update --context CoreDbContext --project ./Core.DAL/Core.DAL.csproj --startup-project ./Core.Server/Core.Server.csproj --verbose
```
