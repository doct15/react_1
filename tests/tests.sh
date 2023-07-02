#!/bin/bash
#
SECONDS_TO_PAUSEFORCONTAINER=3
SECONDS_TO_PAUSEBEFOREKILL=5
TESTS_FAILED=0
TESTS_PASSED=0
LOGDIR="/tmp/test-results"
LOGFILE="$LOGDIR/test-results-$(date +%Y%m%dT%H%M%S)"
rm -rf $LOGDIR
mkdir -p $LOGDIR
echo -n "" > $LOGFILE

clear
echo "LOGFILE: $LOGFILE"
echo ""
echo ""

error_check() {
  # Pass "$?" "Pass Msg" "Fail Msg"
  if [[ $1 -eq 0 ]]; then
    echo $2 | tee -a $LOGFILE
    ((TESTS_PASSED++))
  else
    echo $3 | tee -a $LOGFILE
    ((TESTS_FAILED++))
  fi
}

run_test() {
  # Pass "Test Name" "Test Command" "Success Msg" "Fail Message"
  echo ""
  echo "$1"
  echo "---"
  RESULT="$($2)"
  error_check "$?" "$3" "$4"
  echo $RESULT
  #return $RESULT
}

echo "Starting tests"
echo "==="

run_test "Starting container from image" "docker run -d -p 3000:3000 doct15/react1:latest" "Container Started" "Container Start FAILED"
CONTAINERID=$RESULT

run_test "Pausing for container run" "sleep $SECONDS_TO_PAUSEFORCONTAINER" "Slept" "something went wrong"
WAITING=$RESULT

run_test "Checking for LISTEN on port 3000" "sudo lsof -i:3000" "Listening on 3000" "NOT Listening on 3000"
LSOF=$RESULT

run_test "Looking at Docker logs" "docker logs $CONTAINERID" "Logging command successful" "Logging command Failed"

run_test "Pausing before container kill" "sleep $SECONDS_TO_PAUSEBEFOREKILL" "Slept" "something went wrong"
WAITING=$RESULT

run_test "Killing container" "docker kill $CONTAINERID" "Container Killed" "could NOT be killed"
DOCKERKILL=$RESULT

sudo netstat -an
docker ps
docker images


