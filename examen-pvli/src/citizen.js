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

        //dir aleatoria
        let dirX = Phaser.Math.Between(-1, 1);
        let dirY = Phaser.Math.Between(-1, 1);

        if (dirX == 0 && dirY == 0)
            dirX = 1;

        this.body.velocity.set(this.speed * dirX, this.speed * dirY);

        this.body.bounce.set(1);
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