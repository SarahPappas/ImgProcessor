# ImgProcessor

Processes images with the following tansforms:
- flip
- flop
- rotate: left, right, number of degrees
- thumbnail
- resize
- grayscale

To Run:
npm install 

run node index.js

To send and image with transforms, update the file client-request-script.sh

To decode the response run client-decode-response.sh and pass the Base64 encoded img string recieved from running client-request-script

Server API:
Endpoint: http://[baseurl]/processImg
Request type: POST
Request header: "Content-Type: application/json"
Request body: Request JSON; described below
Supported image formats: JPEG, GIF, PNG, TIFF, SVG

JSON Request Format 
{
   “img”: String,
    “transforms”: []
}
img – A Base64 encoded image string.
transforms – An array of transform objects, listed in order of desired execution.

JSON Response Format
Successful request:
{
      “img”: String 
} 
img – The transformed image as a Base64 encoded string.

Unsuccessful request:
{
    “error”: String
} 
Error – An error message.

Transforms:
Flip Horizontal:
{
    “name”: “flip”
 }
Flips the image over the horizontal axis.

Flip Vertical:
{
    “name”: “flop”
 }
Flips the image over the vertical axis.

Grayscale:
{
    “name”: “grayscale”
 }
Performs a color reduction to the gray color space. For details, please see http://www.graphicsmagick.org/GraphicsMagick.html#details-colorspace 

Rotate:
{
    “name”: “rotate”,
    “direction”: “left” | “right”
 }
{
    “name”: “rotate”,
    “degrees”: Number
 }
direction:
left – Rotates the image 45 degrees counterclockwise. 
right – Rotates the image 45 degrees clockwise. 
degrees: Rotates the image the positive or negative number of provided degrees.

Resize:
{
    “name”: “resize”,
    “dimensions”: [Number, Number]
 }
Resizes the image to the width and height provided in the dimensions array, where the first number in the dimension array is the width, and the second is the height.

Thumbnail:
{
    “name”: “resize”,
    “dimension”: Number
 }
Creates a square thumbnail based on dimension provided, where the dimension is both the width and height of the thumbnail.
