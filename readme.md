# Core
<h2>Welcome to Core app!</h2>

<p>The application is designed to compare web frameworks.</p>

<p>Software engineers who want to play with web frameworks such as angular, react or vue, test components, try different architecture tricks, share their ideas and thoughts with other engineers, welcome to my sandbox!</p>

# Guidelines

<h2>Run using Docker</h2>

- Run the following command

```
docker compose up
```

<h2>Run using Kubernetes</h2>

- Create cluster in docker desktop, make sure that nodes are running
```
kubectl get nodes
```

- Apply deployment and server configuration
```
kubectl apply -f k8s/
```

- check status
```
kubectl get pods
```

<h2>Run using Visual Studio</h2>

<h3>Create database</h3>

- To get started you will need to install postgres sql server v10 or higher with default settings (port=5432, user=postgres password=password1) or create database using docker container (see the next step)
```
https://www.postgresql.org/download/
```

- Create database according to connection string specified in {basePath}/Core/Core.Server/appsettings.json using docker

```
docker run --rm --name postgres -e POSTGRES_PASSWORD=password1 -p 5432:5432 -e POSTGRES_DB=coredb -d clkao/postgres-plv8
```

- Apply migrations. Open Package Manager Console in Visual Studio/Command Prompt/Powershell/etc., make sure that basePath is correct
```
cd {basePath}/Core/
```

- Apply migrations
```
dotnet ef database update --context CoreDbContext --project ./Core.DAL/Core.DAL.csproj --startup-project ./Core.Server/Core.Server.csproj --verbose
```

<h3>Build React UI</h3>

- Install dependencies from {basePath}/Core/Core.React.UI/package.json
```
npm install
```
- Build UI for development or production environment
```
npm run build
npm run build:watch
npm run build:prod
```

<h3>Build Angular UI</h3>

- Install dependencies from {basePath}/Core/Core.Angular.UI/package.json
```
npm install
```
- Build UI for development or production environment
```
npm run build
npm run build:watch
npm run build:prod
```

<h3>Build Vue UI</h3>

- Install dependencies from {basePath}/Core/Core.Vue.UI/package.json
```
npm install
```
- Build UI for development or production environment
```
npm run build
npm run build:watch
npm run build:prod
```

<h3>Run .net server</h3>

- Set {basePath}/Core/Core.Server as startup project

- Run (F5). Check if server is available

<h2>Client URLs:</h2>

- React UI
```
http://localhost:8080/react/#/login
https://localhost:8081/react/#/login
```
- Angular UI
```
http://localhost:8080/angular/#/account/login
https://localhost:8081/angular/#/account/login
```
- Vue UI
```
http://localhost:8080/vue/#/login
https://localhost:8081/vue/#/login
```

<h2>Credentials:</h2>

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

<h2>Swagger</h2>

- Core API is available here
```
http://localhost:8080/swagger/
https://localhost:8081/swagger/
```