1. go to develop branch
git chechout develop
2. nieuwe feature starten
git flow feature start name (no backticks)
work on feature, after finished:

3. prepare to merge
git add .
git commit -m "message"
4. merging
git flow finish feature name (no backticks)
4. this deletes the current feature branch, en redirects you to the develop branch"
git push

## develop / origin/develop conflict?:

- git checkout develop
- git pull 
- git checkout feature/`feature`
- git add .
- git commit -m ""
- git feature finish `feature name`
- git push

## for end development:
5. merge develop with main
git checkout main
git merge development





server/env/development.env

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=

#   - w o r k 3 _ v 2  
 