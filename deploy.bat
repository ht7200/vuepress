@echo off 

call build.bat
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'
git push -f http://10.10.10.45:8000/PL/FE-DOC.git master:master

cd ../../..