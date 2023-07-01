#!/bin/bash
#
SECONDS_TO_PAUSEFORCONTAINER=3
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
  # Pass "$?", "Pass Msg", "Fail Msg"
  if [[ $1 -gt 0 ]]; then
    echo $3 | tee -a $LOGFILE
    ((TESTS_FAILED++))
  else
    echo $2 | tee -a $LOGFILE
    ((TESTS_PASSED++))
  fi
}

echo "Starting tests"
echo "==="

echo ""
echo "Starting container from image"
echo "---"
CONTAINERID=$(docker run -d -p 3000:3000 doct15/react1:latest)
error_check "$?" "--Container Started--" "--Container Start Failed--"
echo $CONTAINERID

echo ""
echo "Pausing for container run"
echo "---"
echo -n "waiting."
for (( c=1; c<=$SECONDS_TO_PAUSEFORCONTAINER; c++ ))
do 
   sleep 1s
   echo -n "."
done
echo ""
echo ""
echo "Checking for LISTEN on port 3000"
echo "---"
NETSTAT=$(netstat -an | grep 3000 | grep "LISTEN ")
error_check "$?" "--Listening on 3000--" "--NOT Listening--"
echo $NETSTAT

echo ""
echo "Killing container"
echo "---"
DOCKERKILL=$(docker kill $CONTAINERID)
error_check "$?" "--Container Killed--" "--could NOT be Killed--"
echo $DOCKERKILL


