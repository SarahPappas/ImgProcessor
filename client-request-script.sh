#!/bin/bash

curl --header "Content-Type: application/json"\
    --request POST\
    --data '{"img": "'$(base64 ~/Downloads/smaller-test-img.png)'", "transforms": [{"name": "thumbnail", "dimensions": 75}, {"name": "grayscale"}, {"name": "flip"}] }'\
    http://localhost:3000/processImg

# "transforms": [{"name": "flip"}]
# "transforms": [{"name": "flop"}]
# "transforms": [{"name": "grayscale"}]
# "transforms": [{"name": "rotate", "direction": "left"}]
# "transforms": [{"name": "rotate", "direction": "right"}]
# "transforms": [{"name": "rotate", "degrees": -38}]
# "transforms": [{"name": "rotate", "degrees": 78}]
# "transforms": [{"name": "resize", "dimensions": [50, 50]}]
# "transforms": [{"name": thumbnail, "dimension": 75}]

# {"name": "grayscale"}, {"name": "flip"}, {"name": "flop"}