#!/bin/bash

curl --header "Content-Type: application/json"\
    --request POST\
    --data '{"img": "'$(base64 ~/Downloads/smaller-test-img.png)'", "transforms": [{"thumbnail": 75}, {"grayscale": null}] }'\
    http://localhost:3000/processImg

# "transforms": [{"flip": null}]
# "transforms": [{"flop": null}]
# "transforms": [{"grayscale": null}]
# "transforms": [{"rotate": "left"}]
# "transforms": [{"rotate": -38}]
# "transforms": [{"resize": [50, 50]}]
# "transforms": [{"thumbnail": 75}]

# {"grayscale": null}, {"flip": null}, {"flop": null}