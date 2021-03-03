#!/bin/bash

curl --header "Content-Type: application/json"\
    --request POST\
    --data '{"img": "'$(base64 ~/Downloads/super-small-test.png)'", "extension": "png", "transformation": [{"flip": null}]}'\
    http://localhost:3000/processImg
