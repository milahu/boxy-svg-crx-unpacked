#!/usr/bin/env bash

# disable jekyll SSG on github pages
touch .nojekyll

if [ -e chrome-app.html ]; then
  git mv chrome-app.html index.html
fi

# fix script path
sed -i 's|src="/|src="./|' index.html

# fix import path
sed -i "s|'/modules/|'./modules/|g" chrome-app.js

git add .
