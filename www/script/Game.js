winW = window.innerWidth;
winH = window.innerHeight;

var game = new Phaser.Game(winW, winH, Phaser.AUTO, 'game_canvas', { preload: preload, create: create, update: update, render:render });

function preload() {
    game.load.tilemap('level', 'data/Level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'assets/tiles.png');
    game.load.image('player', 'assets/player.png');
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

    game.stage.backgroundColor = '#787878';
    map = game.add.tilemap('level');
    map.addTilesetImage('tiles', 'tiles');
    layer = map.createLayer('Tile Layer 1');

    height = layer.layer.height;
    width = layer.layer.width;
    layer.resizeWorld();

    cursors = game.input.keyboard.createCursorKeys();
    
    socket.on('my_event',function(type){
        console.log('Event');
    });

    startGame();
}

function startGame(){
    game.physics.startSystem(Phaser.Physics.ARCADE);
    p = game.add.sprite(0,0, 'player');
    game.physics.enable(p, Phaser.Physics.ARCADE);
    p.body.collideWorldBounds = true;
    game.camera.follow(p);
}

function update() {
    p.body.velocity.x = 0;
    p.body.velocity.y = 0;

    if (cursors.up.isDown)
    {
        p.body.velocity.y = -200;
    }
    else if (cursors.down.isDown)
    {
        p.body.velocity.y = 200;
    }

    if (cursors.left.isDown)
    {
        p.body.velocity.x = -200;
    }
    else if (cursors.right.isDown)
    {
        p.body.velocity.x = 200;
    }
}

function render() {

}