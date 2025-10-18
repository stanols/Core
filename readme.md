# Core
<h2>Welcome to Core app!</h2>

<p>The application is designed to compare web frameworks.</p>

<p>Software engineers who want to play with web frameworks such as angular, react or vue, test components, try different architecture tricks, share their ideas and thoughts with other engineers, welcome to my sandbox!</p>

# Guidelines/Helpers

<h2>Docker</h2>

- Run the following command

```
docker compose up
```

- To rebuild image run the following
```
docker build -t core/server .
```

<h2>Kubernetes (k8s)</h2>

- Create cluster in docker desktop, make sure that Nodes were created and status is "Ready"
```
kubectl get nodes
```
- Apply configuration to k8s
```
kubectl apply -f k8s/
or
kubectl apply -f k8s/core-database.yaml
kubectl apply -f k8s/core-server.yaml
kubectl apply -f k8s/core-ingress.yaml
```

- Make sure that pods have "Running" status
```
kubectl get pods
```

- To make web site available via friendly name install ingress (nginx)
```
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/main/deploy/static/provider/cloud/deploy.yaml
```
- Add the following line to hosts file (C:\Windows\System32\drivers\etc for windows)
```
127.0.0.1 core.by
```
- Check if it's available
```
https://core.by/angular/#/account/login
```

- If something goes wrong search for logs
```
kubectl logs deployment/core-server
kubectl logs core-server
kubectl describe pod core-server
```
- Make sure the port is not allocated by some other process, to check this run the following in powershell
```
Get-Process -Id (Get-NetTCPConnection -LocalPort 8080).OwningProcess
```

<h2>Visual Studio</h2>

<h3>Database</h3>

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

<h3>React UI</h3>

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

<h3>Angular UI</h3>

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

<h3>Vue UI</h3>

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

<h3>Dotnet Web API</h3>

- Set {basePath}/Core/Core.Server as startup project

- Run (F5). Check if server is available

<h2>Client URLs</h2>

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

<h2>Swagger</h2>

- Core API is available here
```
http://localhost:8080/swagger/
https://localhost:8081/swagger/
```