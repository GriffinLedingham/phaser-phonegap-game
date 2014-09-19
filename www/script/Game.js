winW = window.innerWidth;
winH = window.innerHeight;

var game = new Phaser.Game(winW, winH, Phaser.AUTO, 'game_canvas', { preload: preload, create: create, update: update, render:render });

function preload() {

}

var map;
var layer;
var p;
var height;
var width;
var socket;
var cursors;

function create() {
    socket = io.connect('http://localhost:3000');

    game.stage.backgroundColor = '#0099FF';
    
    socket.on('my_event',function(type){
        console.log('Event');
    });

    startGame();
}

function startGame(){

}

function update() {

}

function render() {

}