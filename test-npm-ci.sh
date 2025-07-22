#!/bin/bash
# This script tests if npm ci works correctly

echo "Testing npm ci..."
npm ci

if [ $? -eq 0 ]; then
  echo "Success! npm ci completed without errors."
else
  echo "Error: npm ci failed. Please run ./regenerate-lock-file.sh to fix the issue."
fi