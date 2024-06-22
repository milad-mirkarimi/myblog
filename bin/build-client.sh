#!/bin/bash

set -xe

cd app/client
npm ci
npm run build

cd ../..

cp -r app/client/build/* public/
