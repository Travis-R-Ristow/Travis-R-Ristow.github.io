// //	GLOBAL VARIABLES	\\
// width - gets canvas.width
// height - gets canvas.height
// frameCount - gets canvas.frameCount

var aspectRatio;
var size;
var smaller = 1.75;
var img;
// comprehensible Pixel Array \\
var compArr;
var canvas;
var selectedColor = {r: 255, g: 255, b: 255, a: 255};

function preload() {
  img = loadImage("https://d14nx13ylsx7x8.cloudfront.net/repo_assets/assets/000/029/278/original/dino.png");
}

function setup() {
  size = (windowWidth/1.1)/smaller;
  aspectRatio = (displayWidth) / (displayHeight);
        
  createCanvas(size/1.1, (size/aspectRatio)/1.1).parent('game');
  var imgFullURL;
  canvas = document.getElementById('defaultCanvas0');
}



function draw() {
  document.getElementById("defaultCanvas0").style.cursor = 'pointer';
  background(200);
  noStroke();
  imgFullURL = document.getElementById('grabImage');
  canvas.getContext('2d').drawImage(imgFullURL,0,0,size/1.1, (size/aspectRatio)/1.1);
  loadPixels();
// loadPixels();
   // noLoop();
   // console.timeEnd("frame");
   fill(selectedColor.r, selectedColor.g, selectedColor.b, selectedColor.a);
   // ellipse(mouseX, mouseY, size/250);
}

function mousePressed() {
    var clickedColor;
        // compArr = compPixels(pixels);
        // console.log( compArr );
    if(mouseX < 0 || mouseY < 0  ||  mouseX > size/1.1 || mouseY > (size/aspectRatio)/1.1){return}
    clickedColor = canvas.getContext('2d').getImageData(mouseX, mouseY, 1, 1).data;
    selectedColor = {r: clickedColor[0], g: clickedColor[1], b: clickedColor[2], a: clickedColor[3]}
    console.log(selectedColor);
    var clr = color(selectedColor.r ,selectedColor.g, selectedColor.b);
    document.getElementById('clickedColor').style.backgroundColor = clr;
    noLoop();
}


$(document).ready(() => {
    $("#rmvColor").click(() => {
       for(var i = 0; i < pixels.length; i+=4){
            if( pixels[i] == selectedColor.r &&
                pixels[i+1] == selectedColor.g &&
                pixels[i+2] == selectedColor.b &&
                pixels[i+3] == selectedColor.a){
                    pixels[i] = 255;
                    pixels[i+1] = 255;
                    pixels[i+2] = 255;
                    pixels[i+3] = 0;
            }
        }
        updatePixels();
        noLoop();
        console.log("Color Eliminated!");
    });

    $("#saveImage").click(() => {
       saveCanvas(canvas, "TravisIsTheBEST", 'jpg');
    });

    $('input').inputFileText( {text: 'Upload Image'} );
});



// //\\
// function compPixels(pxls) {
//   var newArr = [];
//   var pix;
//   for(var i = 0; i < pxls.length; i+=4){
//     pix = {
//       r: pxls[i],
//       g: pxls[i+1],
//       b: pxls[i+2],
//       a: pxls[i+3]
//     }
//     newArr.push(pix);
//   }
//   // console.log( newArr );

//   return newArr;
// }
// //\\




function windowResized() {
  size = (windowWidth/1.1)/smaller;
    aspectRatio = (displayWidth) / (displayHeight);
  resizeCanvas(size/1.1, (size/aspectRatio)/1.1);
}




function previewFile() {
  var preview = document.querySelector('img');  // FIRST IMG TAG FOUND
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.src = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";   // just in case.
  }

}