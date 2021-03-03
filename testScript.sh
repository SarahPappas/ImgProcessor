#!/bin/bash

# ENCODED_IMG=@./imgFileEncoded
# ENCODED_IMG=$(base64 ~/Downloads/malith-d-karunarathne-qIRJeKdieKA-unsplash.jpg)

curl --header "Content-Type: application/text"\
    --request POST\
    --data @./imgFileEncoded.txt\
    http://localhost:3000/processImg

#curl --request POST --header "Content-Type: application/json" --data '{"img": "test"}' http://localhost:3000/processImg
# curl --request POST --header "Content-Type: application/json" --data '{"img": "test"}' http://localhost:3000/processImg

#-H "Accept: application/json"
    # --data '{"img": "'"@./imgFileEncoded.txt"'"}'\
