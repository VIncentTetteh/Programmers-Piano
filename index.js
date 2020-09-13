
//accessing dom elements by id

var c = document.getElementById('c');
var d = document.getElementById('d');
var e = document.getElementById('e');
var f = document.getElementById('f');
var g = document.getElementById('g');
var a = document.getElementById('a');
var b = document.getElementById('b');
var c2 = document.getElementById('c2');
var d2 = document.getElementById('d2');
var e2 = document.getElementById('e2');
var f2 = document.getElementById('f2');
var g2 = document.getElementById('g2');
var a2 = document.getElementById('a2');
var b2 = document.getElementById('b2');
var c3 = document.getElementById('c3');
var d3 = document.getElementById('d3');
var e3 = document.getElementById('e3');
var f3 = document.getElementById('f3');
var g3 = document.getElementById('g3');
var a3 = document.getElementById('a3');
var b3 = document.getElementById('b3');
var c4 = document.getElementById('c4');


//adding an event
c.addEventListener('click', ()=>{
    var myaudio = new Audio('./audios/Piano113.mp3');
    myaudio.play();
});

d.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano13.mp3');
    myaudio.play();
});

e.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano15.mp3');
    myaudio.play();
});

f.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano118.mp3');
    myaudio.play();
});
g.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano18.mp3');
    myaudio.play();
});

a.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano122.mp3');
    myaudio.play();
});

b.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano112.mp3');
    myaudio.play();
});

c2.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano114.mp3');
    myaudio.play();
});

d2.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano13.mp3');
    myaudio.play();
});

e2.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano15.mp3');
    myaudio.play();
});

f2.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano119.mp3');
    myaudio.play();
});

g2.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano121.mp3');
    myaudio.play();
});

a2.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano110.mp3');
    myaudio.play();
});

b2.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano124.mp3');
    myaudio.play();
});

c3.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano113.mp3');
    myaudio.play();
});

d3.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano115.mp3');
    myaudio.play();
});

e3.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano14.mp3');
    myaudio.play();
});

f3.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano119.mp3');
    myaudio.play();
});

g3.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano115.mp3');
    myaudio.play();
});

a3.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano110.mp3');
    myaudio.play();
});

b3.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano124.mp3');
    myaudio.play();
});

c4.addEventListener('click', () => {
    var myaudio = new Audio('./audios/Piano115.mp3');
    myaudio.play();
});

//keyboard notes code starts from here
//declare a variable and asigne the dom body to it
var keypressed = document.body;

keypressed.addEventListener('keydown',(e)=>{
    var setnote = e.keyCode;
    if(setnote === 67){
        var myaudio = new Audio('./audios/Piano113.mp3');
        myaudio.play();
    }
})


keypressed.addEventListener('keydown', (e) => {
    var setnote = e.keyCode;
    if (setnote === 68) {
        var myaudio = new Audio('./audios/Piano13.mp3');
        myaudio.play();
    }
})

keypressed.addEventListener('keydown', (e) => {
    var setnote = e.keyCode;
    if (setnote === 69) {
        var myaudio = new Audio('./audios/Piano15.mp3');
        myaudio.play();
    }
})

keypressed.addEventListener('keydown', (e) => {
    var setnote = e.keyCode;
    if (setnote === 70) {
        var myaudio = new Audio('./audios/Piano118.mp3');
        myaudio.play();
    }
})

keypressed.addEventListener('keydown', (e) => {
    var setnote = e.keyCode;
    if (setnote === 71) {
        var myaudio = new Audio('./audios/Piano18.mp3');
        myaudio.play();
    }
})

keypressed.addEventListener('keydown', (e) => {
    var setnote = e.keyCode;
    if (setnote === 65) {
        var myaudio = new Audio('./audios/Piano122.mp3');
        myaudio.play();
    }
})

keypressed.addEventListener('keydown', (e) => {
    var setnote = e.keyCode;
    if (setnote === 66) {
        var myaudio = new Audio('./audios/Piano112.mp3');
        myaudio.play();
    }
})
