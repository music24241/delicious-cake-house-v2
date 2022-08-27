#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -b master
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:music24241/music24241.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
 git push -f git@github.com:music24241/delicious-cake-house-v2.git master:gh-pages

cd -
