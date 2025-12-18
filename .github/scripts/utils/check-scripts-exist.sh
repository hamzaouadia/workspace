#!/bin/bash
# Check if required scripts exist
# Sets GITHUB_OUTPUT variable 'scripts_exist' to true or false

if [ ! -d ".github/scripts/utils" ] || [ ! -d ".github/scripts/ci" ]; then
  echo "scripts_exist=false" >> $GITHUB_OUTPUT
  echo "⚠️ Scripts not found in commit $1 - skipping issue automation"
else
  echo "scripts_exist=true" >> $GITHUB_OUTPUT
fi
