#!/bin/bash

# ENCODED_IMG=@./imgFileEncoded
# ENCODED_IMG=$(base64 ~/Downloads/malith-d-karunarathne-qIRJeKdieKA-unsplash.jpg)

curl --header "Content-Type: application/json"\
    --request POST\
    --data '{"img": "'$(base64 ~/Downloads/super-small-test.png)'"}'\
    http://localhost:3000/processImg

#curl --request POST --header "Content-Type: application/json" --data '{"img": "test"}' http://localhost:3000/processImg
# curl --request POST --header "Content-Type: application/json" --data '{"img": "test"}' http://localhost:3000/processImg

#-H "Accept: application/json"
    # --data '{"img": "'"@./imgFileEncoded.txt"'"}'\
