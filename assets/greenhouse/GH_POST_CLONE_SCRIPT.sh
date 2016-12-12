#!/bin/sh

set -e

npm install
sed -i.bak "s/\$API_KEY/$API_KEY/g" project.json
npm run restore
