# Transformer
Description: A test page which has an original image displayed on the left and the modifiable image on the right. The page has buttons to trigger the transformation functions, colorInvert() and randomizePixels() and includes a button to reset the image to it's original image.

Library Usage:
- colorInvert()- inverts the colors in an image
- randomizePixels()-randomizes the pixels in an image
- resetClick()- when the "Reset" button is clicked, the original image is loaded in canvas
- invertClick()- when the "Invert Colors" button is clicked, colorInvert() is called and inverts the image's color
- randomizeClick()- when the "Randomize Pixels" button is clicked, randomizePixels() is called and randomized the image's pixels

Testing Usage:
- Clicking on the "Reset" button will reset the modified image to it's orginal appearance 
- Clicking on the "Invert Colors" button will trigger the invertColors() function from the library and invert the image's colors
- Clicking on the "Randomize Pixels" button will trigger the randomizePixels() functions from the library and randomize the image's pixels (can repeatedly clicked and show randomized pixels of the image each time)



Preview:

<img width="600" height="300" alt="Screen Shot 2022-03-29 at 5 08 42 PM" src="https://user-images.githubusercontent.com/89554609/160726404-cd94dd7c-7eb9-4f34-8667-37033d0ca7c9.png">
