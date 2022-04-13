
//random function helpers
// fxrand() gives u a value between 0 and 1
// rnd_btw(a,b) gives u a value between a and b
// rnd_btwexp(a,b) gives u a value between a and b, but with an exponential slope (more probable to get the borders than the center)
// rnd_int(a,b) gives u an integer value between a and b

//FUNÇÃO DE REFERÊNCIA PARA RANDOMIZAÇÃO INTERVALAR

function rnd_btw(min, max) {
  return fxrand() * (max - min) + min;
}

function rnd_btwexp(min, max) {
  return fxrand() ** 2 * (max - min) + min;
}

function rnd_int(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(fxrand() * (max - min + 1)) + min;
}
console.log(fxrand())

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  
}

function draw() {
  var maxiterations = 100;

  loadPixels();
  
  for(var x = 0; x < width; x++){
    for(var y = 0; y < height; y++){
      var a = map(x, 0, width, -2, 2);
      var b = map(y, 0, height, -2, 2);  

      var ca = a;
      var cb = b; 
      
      
      var n = 0; 
      var z = 0;
      
      while(n < maxiterations){
        var aa = a*a - b*b;
        var bb = 2 * a * b;
        a = aa + ca;
        b = bb + cb;
        
        if(abs(a + b) > 16){
          break;  
        }
        n++;
      }
      
      var bright = map(n, 0, 100, 0, 255); 
      if(n === maxiterations){
        bright = 0;
      }
      
      var pix = (x + y * width) * 4;
      pixels[pix + 0] = bright;
      pixels[pix + 1] = bright;
      pixels[pix + 2] = bright;
      pixels[pix + 3] = 51;
    }
  }
  updatePixels();
  
}
