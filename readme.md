# Core (Adventures app)
<h4>Welcome to an exciting Adventure!</h4>

<h4>According to Wikipedia...</h4>
<p>...an adventure is an exciting experience that is typically a bold, sometimes risky, undertaking. 
Adventures may be activities with some potential for physical danger such as traveling, exploring, skydiving, mountain climbing,
scuba diving, river rafting or participating in extreme sports.</p>

<h4>The app is designed for...</h4>
<p>...people who want to organize an adventure together, to combine all the information in one place 
and share their ideas and thoughts with each other.</p>

<p>Hope this app will help you to prepare a plan for upcomming adventure faster and provide a plan B if something goes wrong.</p>

<p>Enjoy</p>

# StartUp

<h4>DataBase...</h4>

1. To get started you will need to install postgres sql server v10 or higher with default settings (port=5432, user=postgres password=password1)
```
https://www.postgresql.org/download/
```

2. Create database according to connection string specified in {basePath}/Core/Core.DAL/appsettings.json

3. Apply migrations. Open Package Manager Console in Visual Studio or (Command Prompt, Powershell etc.) and change directory (optional)
```
cd {basePath}/Core/Core.DAL
```

4. Apply migrations running command
```
Update-Database
```
or
```
dotnet ef database update
```

<h4>Run Server...</h4>

1. Set {basePath}/Core/Core.Server as startup project in Visual Studio

2. Run (F5). Check if server is available on http://localhost:3000/

<h4>UI...</h4>

1. Install npm packages specified in devDependencies and dependencies sections in {basePatch}/Core/Core.UI/package.json
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
npm run build-watch
```
for production environment
```
npm run build-prod
```

3. Use the following credentials to log in
```
username: nmatch
password: montenegro44
```
or
```
username: katatinak
password: montenegro44
```