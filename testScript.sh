#!/bin/bash

curl --header "Content-Type: application/json"\
    --request POST\
    --data '{"img": "'$(base64 ~/Downloads/smaller-test-img.png)'", "extension": "png", "transformation": [{"thumbnail": 75}] }'\
    http://localhost:3000/processImg

# "transformation": [{"flip": null}]
# "transformation": [{"flop": null}]
# "transformation": [{"greyscale": null}]
# "transformation": [{"rotate": "left"}]
# "transformation": [{"rotate": -38}]
# "transformation": [{"resize": [50, 50]}]
# "transformation": [{"thumbnail": 75}]

# {"greyscale": null}, {"flip": null}, {"flop": null}