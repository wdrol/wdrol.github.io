
"use strict";

class Enemies
{
    constructor( game )
    {
        this.game = game;

        this.currentEnemy  = null;
        this.minAttackTime = 10000;
        this.addAttackTime = 20000;

        this.randomAttack();
    }


    randomAttack()
    {
        setTimeout( () =>
        {
            if ( this.game.player.waiting )
            {
                this.randomAttack();
            }
            else
            {
                if ( Math.random() < .75 ) // TODO: inverse to game level
                {
                    this.addLargeEnemyShip();
                }
                else
                {
                    this.addSmallEnemyShip();
                }
            }

        } , this.minAttackTime + Math.random() * this.addAttackTime );
    }


    addEnemyShip( name , scale , speed )
    {
        var xv = this.game.getRandomDirection( speed );
        var yv = this.game.getRandomDirection( speed );

        var br = this.game.engine.getViewBounds();

        var xi = xv > 0 ? 0 : br.width;
        var yi = Math.random() * br.height;

        this.currentEnemy = this.game.engine.createShape( this.game.engine.enemyShip , xv , yv , 0 , xi , yi )
            .addBehaviors( [ Behaviors.move , Behaviors.enemyRandomFire , Behaviors.enemyWrap , Behaviors.enemyHitCheck ] );

        this.game.engine.setShapeScale( this.currentEnemy , scale );

        this.currentEnemy.name = name;
    }


    addSmallEnemyShip()
    {
        this.game.sounds.playSmallSaucer();
        this.addEnemyShip( this.game.constants.smallEnemy , .7 , 1.2 );
    }


    addLargeEnemyShip()
    {
        this.game.sounds.playLargeSaucer();
        this.addEnemyShip( this.game.constants.largeEnemy , 1 , .7 );
    }


    killEnemy( updateScore )
    {
        if ( updateScore )
        {
            if ( this.currentEnemy.name == this.game.constants.largeEnemy )
            {
                this.game.scoreboard.update( 50 );
            }
            else
            {
                this.game.scoreboard.update( 100 );
            }
        }

        if ( this.currentEnemy.name == this.game.constants.largeEnemy )
        {
            this.game.sounds.playLargeExplosion();
        }
        else
        {
            this.game.sounds.playSmallExplosion();
        }

        this.game.startExplosion( this.currentEnemy );
        this.game.sounds.stopSaucer();
        this.randomAttack();
    }


    fadeOutEnemy()
    {
        if ( this.currentEnemy != null )
        {
            this.currentEnemy.age = 120;
            this.currentEnemy.max = 120;

            this.game.sounds.stopSaucer();

            this.currentEnemy.addBehaviors( [ Behaviors.move , Behaviors.enemyFade , Behaviors.wrap ] );
        }
    }


    fire()
    {
        this.game.sounds.playFire();

        var min = Math.max(  15 , 30 - ( this.game.level * 1.5 ) );
        var max = Math.max(  30 , 60 - ( this.game.level * 3.5 ) );
        var err = Math.max( min , Math.random() * max ); // for bad aim in early levels (todo: scale with level number here)

        var p1 = this.game.engine.getShapePosition( this.game.player.ship );
        var x1 = p1.x + this.game.getRandomDirection( err );
        var y1 = p1.y + this.game.getRandomDirection( err );

        var p2 = this.game.engine.getShapePosition( this.currentEnemy );
        var x2 = p2.x;
        var y2 = p2.y;

        var xd = x1 - x2;
        var yd = y1 - y2;
        var di = Math.sqrt( ( xd * xd ) + ( yd * yd ) );

        var xa = xd / di;
        var ya = yd / di;

        var rl = this.game.engine.getShapeBounds( this.currentEnemy ).width - 10;

        var xi = x2 + ( xa * rl );
        var yi = y2 + ( ya * rl );

        var xv = ( xa * this.game.physics.bulletSpeed );
        var yv = ( ya * this.game.physics.bulletSpeed );

        var s = this.game.engine.createShape( this.game.engine.bullet , xv , yv , 0 , xi , yi )
            .addBehaviors( [ Behaviors.move , Behaviors.age , Behaviors.bulletHitCheck ] );

        s.age  = this.game.physics.bulletAge;
        s.max  = this.game.physics.bulletAge;
        s.name = this.game.constants.bullet;
    }
}
