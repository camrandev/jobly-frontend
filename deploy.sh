#!/bin/zsh

# Set environment variable
export REACT_APP_BASE_URL=https://jobly-backend-cge8.onrender.com

# Run build command
npm run build

# Copy index.html to 200.html in the build directory
cp build/index.html build/200.html

# Deploy using surge
surge build
