@echo off
set database_name=Admision
For /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%b-%%a)
set hora=%time:~0,2%
set hora=%hora: =0%
set minuto=%time:~3,2%
set segundo=%time:~6,2%

mongodump -d %database_name% -o ./%database_name%DB_backup_%mydate%_%hora%.%minuto%.%segundo%

git add .
TIMEOUT /T 4
git commit -m "%mydate%_%hora%%minuto%%segundo%"
TIMEOUT /T 4
git push