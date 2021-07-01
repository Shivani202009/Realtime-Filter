function preload() {
    
}

function setup() {
    canvas= createCanvas(400,400)
    canvas.center()
    video= createCapture(VIDEO)
    video.size(400,400)
    video.hide()
}

function draw() {
    // image(variable,x,y,width,height)
    image(video,0,0,400,400)
}