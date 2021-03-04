#!/bin/bash

curl --header "Content-Type: application/json"\
    --request POST\
    --data '{"img": "'$(base64 ~/Downloads/super-small-test.png)'", "extension": "png", "transformation": [{"greyscale": null}] }'\
    http://localhost:3000/processImg

# "transformation": [{"flip": null}]
# "transformation": [{"flop": null}]
# "transformation": [{"greyscale": null}]
# "transformation": [{"rotate": "left"}]
# "transformation": [{"rotate": -38}]
# "transformation": [{"resize": [50, 50]}]