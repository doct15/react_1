#!/bin/bash
#
docker login
docker build --quiet=false -t doct15/react1 .
docker push doct15/react1
docker run -p 3000:3000 doct15/react1

