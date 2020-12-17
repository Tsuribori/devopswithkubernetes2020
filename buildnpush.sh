#!/bin/bash

docker build ./pingpong/ -t tsuribori/devops2020-pingpong:latest
docker push tsuribori/devops2020-pingpong

docker build ./project1/timestampgen/ -t tsuribori/dwk-timestampgen:latest
docker push tsuribori/dwk-timestampgen

docker build ./project1/timestampread/ -t tsuribori/dwk-timestampread:latest
docker push tsuribori/dwk-timestampread

docker build ./backend/ -t tsuribori/dwk-backend:latest
docker push tsuribori/dwk-backend


kubectl delete -f ./pingpong/manifests/deployment.yaml
kubectl apply -f ./pingpong/manifests/deployment.yaml

kubectl delete -f ./project1/manifests/deployment.yaml
kubectl apply -f ./project1/manifests/deployment.yaml

kubectl delete -f ./backend/manifests/deployment.yaml
kubectl apply -f ./backend/manifests/deployment.yaml
