#!/bin/bash
# This script regenerates the package-lock.json file

# Remove the existing package-lock.json file
rm package-lock.json

# Run npm install to generate a new package-lock.json file
npm install

echo "package-lock.json has been regenerated."