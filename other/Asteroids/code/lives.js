
"use strict";

class Lives
{
    constructor( game )
    {
        this.game = game;
        this.lives = 3;
        this.maxLives = 10;

        this.update();
    }


    addLife()
    {
        if ( this.lives < this.maxLives )
        {
            this.lives++;
            this.update();
            this.game.sounds.playExtraShip();

            var f = this.game.engine.createShape( this.game.engine.extraShip ).addBehaviors( [ Behaviors.fade ] );

            f.age = 150;
            f.max = 150;

            this.game.engine.moveShape( f , 0 , -80 );
        }
    }


    removeLife()
    {
        this.lives--;
        this.update();

        if ( !this.liveAgain() )
        {
            this.game.engine.createShape( this.game.engine.gameOver );
        }
    }


    liveAgain()
    {
        return ( this.lives > 0 );
    }


    update()
    {
        var shapes = this.game.engine.getAllShapes();

        for ( var i = shapes.length - 1; i > -1; i-- )
        {
            if ( shapes[ i ].name == 'availableShip' )
            {
                this.game.engine.removeShape( shapes[ i ] );
            }
        }

        if ( this.lives > 0 )
        {
            for( var i = 0; i < this.lives; i++ )
            {
                var y = 16;
                var x = ( this.game.engine.getViewBounds().width - 14 ) - ( i * 18 );
                var s = this.game.engine.createShape( this.game.engine.availableShip , 0 , 0 , 0 , x , y );

                this.game.engine.setShapeRotation( s , -90 );
                this.game.engine.setShapeScale( s , .75 );
            }
        }
    }
}
