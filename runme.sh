#!/bin/bash
echo "Installing webcomponents dependencies..."
cd webcomponents
npm ci
npm run build
echo "Installing app dependencies..."
cd ../app
npm ci
npm run build
echo "Installing server dependencies..."
cd ../server
npm ci
echo "Starting node server..."
npm start