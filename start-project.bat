@echo off
start cmd /k "cd /d %~dp0server && npm install && npm run dev"
start cmd /k "cd /d %~dp0client && npm install && npm run dev"
