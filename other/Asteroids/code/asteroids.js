
"use strict";

class Asteroids
{
    constructor( game )
    {
        this.game = game;
        this.count = 0;

        this.addLevelAsteroids();
    }


    addAsteroid( name , scale , speed , x , y )
    {
        this.count++;

        var xv = this.game.getRandomDirection( Math.random() * speed );
        var yv = this.game.getRandomDirection( Math.random() * speed );
        var rv = this.game.getRandomDirection( Math.random() * speed );

        var br = this.game.engine.getViewBounds();

        var xi = x || Math.random() * br.width;
        var yi = y || Math.random() * br.height;

        var asteroid = this.game.engine.createShape( this.game.engine.asteroid , xv , yv , rv , xi , yi )
            .addBehaviors( [ Behaviors.move , Behaviors.wrap , Behaviors.rotate ] );

        asteroid.name = name;

        this.game.engine.setShapeScale( asteroid , scale );
        this.game.engine.setShapeRotation( asteroid , Math.random() * 360 );

        return asteroid;
    }


    addTinyAsteroid( x , y )
    {
        var a = this.addAsteroid( this.game.constants.tinyAsteroid , .14 , 2 , x , y );

        this.game.engine.setShapeStrokeWidth( a , 9 );
    }


    addSmallAsteroid( x , y )
    {
        var a = this.addAsteroid( this.game.constants.smallAsteroid , .35 , 1 , x , y );

        this.game.engine.setShapeStrokeWidth( a , 4 );
    }


    addMediumAsteroid( x , y )
    {
        var a = this.addAsteroid( this.game.constants.mediumAsteroid , .6 , .6 , x , y );

        this.game.engine.setShapeStrokeWidth( a , 2 );
    }


    addLargeAsteroid( x , y )
    {
        var a = this.addAsteroid( this.game.constants.largeAsteroid , 1.1 , .4 , x , y );

        this.game.engine.setShapeStrokeWidth( a , 1.5 );
    }


    addLevelAsteroids()
    {
        this.count = 0;

        var n = Math.min( 1 + Math.floor( this.game.level / 3 ) , 4 );

        for ( var i = 0; i < n; i++ )
        {
            this.addLargeAsteroid();
        }

        if ( this.game.level > 3 )
        {
            for ( var i = 0; i < n - 1; i++ )
            {
                this.addMediumAsteroid();
            }
        }

        if ( this.game.level > 6 )
        {
            for ( var i = 0; i < n - 2; i++ )
            {
                this.addSmallAsteroid();
            }
        }

        if ( this.game.level > 9 )
        {
            for ( var i = 0; i < n - 2; i++ )
            {
                this.addTinyAsteroid();
            }
        }
    }


    killAsteroid( asteroid )
    {
        this.count--;

        var pos = this.game.engine.getShapePosition( asteroid );

        if ( asteroid.name == this.game.constants.largeAsteroid )
        {
            this.addMediumAsteroid( pos.x - 5 , pos.y - 5 );
            this.addMediumAsteroid( pos.x + 5 , pos.y + 5 );

            this.game.scoreboard.update( 20 );
            this.game.sounds.playLargeExplosion();
            this.game.engine.removeShape( asteroid );
        }
        else if ( asteroid.name == this.game.constants.mediumAsteroid )
        {
            this.addSmallAsteroid( pos.x - 5 , pos.y - 5 );
            this.addSmallAsteroid( pos.x + 5 , pos.y + 5 );

            this.game.scoreboard.update( 40 );
            this.game.sounds.playMediumExplosion();
            this.game.engine.removeShape( asteroid );
        }
        else if ( asteroid.name == this.game.constants.smallAsteroid )
        {
            this.addTinyAsteroid( pos.x - 5 , pos.y - 5 );
            this.addTinyAsteroid( pos.x + 5 , pos.y + 5 );

            this.game.scoreboard.update( 60 );
            this.game.sounds.playSmallExplosion();
            this.game.engine.removeShape( asteroid );
        }
        else
        {
            this.game.scoreboard.update( 80 );
            this.game.startExplosion( asteroid );
            this.game.sounds.playSmallExplosion();
        }

        //----- Check for end of level
        if ( this.count < 1 )
        {
            this.game.showLevelComplete();
            this.game.player.fadeOutPlayer();
            this.game.enemies.fadeOutEnemy();
        }
    }
}
