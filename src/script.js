/*  Description 
*   This library has functions to transform an image with no css and loads, 
*   sets and gets pixel data from the HTML5 Canvas Api:
*   colorInvert()- inverts the colors in an image
*   randomizePixels()-randomizes the pixels in an image
*/

//Setting Up Canvas
const canvas=document.getElementById('canvas');
const ctx= canvas.getContext('2d');
//creating new image
const img= new Image();
//can modify the image used
img.src='melon.jpg'; 

//once the image loads, the image will load as a canvas drawing
img.onload=function(){
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
}

/****** Library Transformation Functions ******/
//precondition:  Pixels in image are in a sorted array
//postcondition: Pixels in data array are stored in reversed order, leads to overall inverted color of image
const colorInvert=()=>{
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    const imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
    const data=imgData.data;
    
    for(let i=0; i<data.length;i+=4){
        data[i]=255-data[i]; //controls red values
        data[i+1]=255-data[i+1];//controls green values
        data[i+2]=255-data[i+2];//control blue values
    }
    ctx.putImageData(imgData,0,0);
}
//precondition:  Pixels in image are in a sorted array
//postcondition: The image data is reassigned to have the rgb values randomized each time the function is called
const randomPixels=()=>{
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    const imgData=ctx.getImageData(0,0,canvas.width,canvas.height);
    const data=imgData.data;
    for(let i=0;i<data.length;i+=4){
        data[i]=Math.random()*255;//controls red values
        data[i+1]=Math.random()*255;//controls green values
        data[i+2]=Math.random()*255;//controls blue values
    }
    //Image data is re-enetered into canvas image, image will be modified
    ctx.putImageData(imgData,0,0);
}


/****** Button Functions ******/
//when button is clicked, original image is loaded in canvas
const resetClick=()=>{
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
}
//when button is clicked, colorInvert() is called
const invertClick=()=>{
    colorInvert();
}
//when button is clicked, randomPixels() is called
const randomizeClick=()=>{
    randomPixels();
}





