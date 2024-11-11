echo Starting Frontend
start cmd /k "cd /d %~dp0my-app && npm run start"

echo Starting Backend
start cmd /k "cd /d %~dp0backend && npm run start"
