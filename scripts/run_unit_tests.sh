#! /bin/bash
for TESTFILE in ./test/*.js
do
  echo $TESTFILE
  node $TESTFILE
done
