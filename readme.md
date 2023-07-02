# Core
<h4>Welcome to Core app!</h4>

<p>The application is designed to compare web frameworks. 
</p>
<p>Software engineers who want to play with both frameworks, test components and try differend architecture tricks, share their ideas and thoughts with other engineers, welcome to my sandbox.</p>

<p>Enjoy</p>

# StartUp

<h2>Build react UI</h2>

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

<h2>Build angular UI</h2>

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

<h2>Create database</h2>

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

4. Apply migrations running command
```
dotnet ef database update --context CoreDbContext --project ./Core.DAL/Core.DAL.csproj --startup-project ./Core.Server/Core.Server.csproj --verbose
```

<h2>Run app and login</h2>

1. Set {basePath}/Core/Core.Server as startup project in Visual Studio

2. Run (F5). Check if server is available on

```
http://localhost:3000/react/
http://localhost:3000/angular/
```

<h2>Credentials</h2>

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

![alt text](https://github.com/Stanols/Core/blob/develop/CoreProjectAngular.png?raw=true)
![alt text](https://github.com/Stanols/Core/blob/develop/CoreProjectReact.png?raw=true)
