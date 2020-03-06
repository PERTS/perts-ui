#!/bin/bash

# Commands to be run during a codeship build.
# In a codeship project, in the Setup Commands window, enter this:

# chmod +x codeship_setup.sh && ./codeship_setup.sh

# This ensures that lines which have an error cause this whole script to
# exit with an error.
# http://stackoverflow.com/questions/3474526/stop-on-first-error
set -e

npm run storybook:deploy
