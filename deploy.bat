
npm run build

cd docs/.vuepress/dist
dir

git init
git add -A
git commit -m 'deploy'
git push -f http://10.10.10.45:8000/ht7200/FE-DOC.git master:gh-pages

cd ../../..