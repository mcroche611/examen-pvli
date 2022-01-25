export default class Citizen extends Phaser.GameObjects.Sprite
{
    constructor(scene, x, y)
    {
        super(scene, x, y, 'lady_spritesheet');

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);

        this.body.pushable = false;
        this.body.setCollideWorldBounds();

        this.speed = 50;

        this.setDir();

        this.body.bounce.set(1);
    }

    //dir aleatoria
    setDir()
    {
        this.dirX = Phaser.Math.Between(-1, 1);
        this.dirY = Phaser.Math.Between(-1, 1);

        if (this.dirX == 0 && this.dirY == 0)
            this.dirX = 1;

        this.body.velocity.set(this.speed * this.dirX, this.speed * this.dirY);

        let myTimeout = this.scene.time.addEvent({
            delay: 2000,                // ms
            callback: this.setDir,
            args: [],
            callbackScope: this,
            loop: false
          });
    }

    /**
     * Redefinición del preUpdate de Phaser
     * @override
     */
    preUpdate(t, dt)
    {
        super.preUpdate(t, dt);

        //Move de balls + animaciones según dir
    }
}