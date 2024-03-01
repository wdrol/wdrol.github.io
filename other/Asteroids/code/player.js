
"use strict";

class Player
{
    constructor( game )
    {
        this.game = game;
        this.ship = null;
        this.thrust = null;
        this.waiting = true;

        this.initKeyboard();
        this.createSafeArea();
    }


    initKeyboard()
    {
        var down = null;

        document.addEventListener( 'keydown' , ( event ) =>
        {
            if ( event.key == this.game.constants.right ) { this.ship.rv =  this.game.physics.playerRotationRate; }
            if ( event.key == this.game.constants.left  ) { this.ship.rv = -this.game.physics.playerRotationRate; }
            if ( event.key == this.game.constants.up    )
            {
                // using setInterval to smooth out and ignore unpredictable keyboard auto-repeats
                if ( down == null )
                {
                    this.game.engine.setShapeOpacity( this.thrust , 1 );
                    this.game.engine.setShapeVisibility( this.thrust , true );

                    down = setInterval( () =>
                    {
                        this.applyThrust();
                    } , this.game.physics.thrustRepeatInterval );
                }
            }
        });

        document.addEventListener( 'keyup' , ( event ) =>
        {
            if ( event.key == this.game.constants.right ) { this.ship.rv = 0; }
            if ( event.key == this.game.constants.left  ) { this.ship.rv = 0; }
            if ( event.key == this.game.constants.up    )
            {
                if ( down != null )
                {
                    this.game.engine.setShapeVisibility( this.thrust , false );
                    this.game.engine.setShapeOpacity( this.thrust , 0 );

                    clearInterval( down );
                    down = null;
                }
            }

            if ( event.key == ' ' )
            {
                this.fire();
            }

            if ( event.key == 'q' )
            {
                this.debugShowAll();
            }
        });
    }


    getShapeRotationRadians( shape )
    {
        var degree = this.game.engine.getShapeRotationDegrees( shape );
        var angDeg = degree < 0 ? 360 + degree : degree;
        var angRad = angDeg * ( Math.PI / 180 );

        return angRad;
    }


    createSafeArea()
    {
        this.game.engine.createShape( this.game.engine.safeArea )
            .addBehaviors( [ Behaviors.safeAreaHitCheck ] );
    }


    createPlayer()
    {
        this.ship = this.game.engine.createShape( this.game.engine.ship )
            .addBehaviors( [ Behaviors.move , Behaviors.rotate , Behaviors.wrap , Behaviors.playerHitCheck ] );

        this.ship.ignoreSmartWrap = true;
        this.ship.name = this.game.constants.player;
        this.ship.friction = this.game.physics.friction;

        this.game.sounds.playBeat();
        this.game.engine.setShapeRotation( this.ship , -90 );

        this.thrust = this.game.engine.getGroupShape( this.ship , 1 );
        this.waiting = false;
    }


    killPlayer()
    {
        this.waiting = true;
        this.game.sounds.stopBeat();
        this.game.lives.removeLife();
        this.game.enemies.fadeOutEnemy();
        this.game.startExplosion( this.ship );
        this.game.sounds.playSmallExplosion();

        if ( this.game.lives.liveAgain() )
        {
            setTimeout( () =>
            {
                if ( this.game.asteroids.length < 1 )
                {
                    this.game.startNextLevel();
                }
                else
                {
                    this.createSafeArea();
                }

            } , 1000 );
        }
    }


    fadeOutPlayer()
    {
        this.waiting  = true;
        this.ship.age = 120;
        this.ship.max = 120;

        this.game.sounds.stopBeat();
        this.ship.behaviors.push( Behaviors.playerFade );
    }


    fire()
    {
        this.game.sounds.playFire();

        var ra = this.getShapeRotationRadians( this.ship );

        var xa = Math.cos( ra );
        var ya = Math.sin( ra );

        var p = this.game.engine.getShapePosition( this.ship );

        var x = p.x + ( xa * this.game.physics.playerFireRadius );
        var y = p.y + ( ya * this.game.physics.playerFireRadius );

        var xv = ( xa * this.game.physics.bulletSpeed ) + this.ship.xv;
        var yv = ( ya * this.game.physics.bulletSpeed ) + this.ship.yv;

        var s = this.game.engine.createShape( this.game.engine.bullet , xv , yv , 0 , x , y )
            .addBehaviors( [ Behaviors.move , Behaviors.age , Behaviors.bulletHitCheck ] );

        s.age  = this.game.physics.bulletAge;
        s.max  = this.game.physics.bulletAge;
        s.name = this.game.constants.bullet;
    }


    applyThrust()
    {
        var ra = this.getShapeRotationRadians( this.ship );

        var xa = Math.cos( ra );
        var ya = Math.sin( ra );

        this.ship.xv += xa * this.game.physics.thrustDampenAmount;
        this.ship.yv += ya * this.game.physics.thrustDampenAmount;

        this.ship.xv = this.ship.xv < 0 ?
             Math.max( this.ship.xv , -this.game.physics.playerSpeedLimit ) :
             Math.min( this.ship.xv ,  this.game.physics.playerSpeedLimit ) ;

        this.ship.yv = this.ship.yv < 0 ?
             Math.max( this.ship.yv , -this.game.physics.playerSpeedLimit ) :
             Math.min( this.ship.yv ,  this.game.physics.playerSpeedLimit ) ;
    }


    debugShowAll()
    {
        console.clear();

        this.game.engine.getAllShapes().forEach( function( child )
        {
            console.log( child.name , child );
        });
    }
}
