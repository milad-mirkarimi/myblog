#!/bin/bash

set -xe

cd app/client
npm install
npm run build

cd ../..

cp -r app/client/build/* public/
