#!/bin/bash
#
if [[ "$RUN_TESTS" -gt 0 ]]; then
  echo "RUNNING TESTS INSTEAD OF THE SERVER"
  sleep 120
else
  echo "Starting the server"
  npm start
fi
