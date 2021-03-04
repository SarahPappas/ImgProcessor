#!/bin/bash

curl --header "Content-Type: application/json"\
    --request POST\
    --data '{"img": "'$(base64 ~/Downloads/super-small-test.png)'", "extension": "png", "transformation": [{"rotate": "left"}]}'\
    http://localhost:3000/processImg

# "transformation": [{"flip": null}]