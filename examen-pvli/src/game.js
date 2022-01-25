
window.onload = ()=>{

const config = {
    type: Phaser.WEBGL,
    parent: "mygame",
    scale: {
        width: 320,
        height: 240,
        zoom: 3,
        autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    pixelArt: true,
    scene: [  ]
};

new Phaser.Game(config);
};