rem остановить публикацию при ошибках
rem set -e

rem сборка
rem npm run build

rem переход в каталог сборки
cd dist

rem если вы публикуете на пользовательский домен
rem echo 'www.example.com' > CNAME

git init
git add -A
git commit -m deploy

rem git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
git push -f https://github.com/makajda/resume.git master:gh-pages

cd..

pause
