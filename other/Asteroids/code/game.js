
// For sounds, see http://www.classicgaming.cc/classics/asteroids/sounds

"use strict";

class Game
{
    constructor( canvasId , engineName , soundApi )
    {
        this.level  = 1;
        this.sounds = SoundFactory.getGameSounds( soundApi );
        this.engine = EngineFactory.getGameEngine( engineName , canvasId );

        this.constants =
        {
            up     : 'ArrowUp'    ,
            left   : 'ArrowLeft'  ,
            right  : 'ArrowRight' ,

            bullet : 'bullet' ,
            player : 'player' ,

            anyEnemy   : 'enemy'       ,
            smallEnemy : 'small-enemy' ,
            largeEnemy : 'large-enemy' ,

            anyAsteroid    : 'asteroid'       ,
            tinyAsteroid   : 'tiny-asteroid'  ,
            smallAsteroid  : 'small-asteroid' ,
            largeAsteroid  : 'large-asteroid' ,
            mediumAsteroid : 'medium-asteroid'
        }

        this.physics =
        {
            friction             : .994 ,
            bulletAge            :   70 ,
            bulletSpeed          :    6 ,
            playerSpeedLimit     :    8 ,
            playerFireRadius     :   14 ,
            playerRotationRate   :    4 ,
            thrustDampenAmount   :  .25 ,
            thrustRepeatInterval :   50 , // milliseconds
            enemyDirectionChance :  250 , // 1 in 250 chance of changing direction per frame
            enemyFireChance      :  250 , // 1 in 250 chance of firing per frame
        }

        //this.test = new Test( this );

        this.lives = new Lives( this );
        this.player = new Player( this );
        this.enemies = new Enemies( this );
        this.asteroids = new Asteroids( this );
        this.scoreboard = new Scoreboard( this );

        this.engine.startGameLoop( this );
    }


    getRandomDirection( value )
    {
        return ( Math.random() > .5 ? value : -value );
    }


    startNextLevel()
    {
        this.level++;

        setTimeout( () =>
        {
            this.engine.removeShape( this.player.ship );

            this.player.createSafeArea();
            this.asteroids.addLevelAsteroids();

        } , 1500 );
    }


    startExplosion( shape )
    {
        var explodeAge  = 40;
        var explodeRate = 6

        var p = this.engine.getShapePosition( shape );

        var xv =   shape.xv;
        var yv =   shape.yv;
        var rv = ( shape.rv || 1 ) * explodeRate;

        if ( rv > explodeRate )
        {
            rv = explodeRate;
        }

        if ( rv < 4 )
        {
            rv = 4;
        }

        var explode = this.engine.createShape( this.engine.explosion , xv , yv , rv , p.x , p.y )
            .addBehaviors( [ Behaviors.move , Behaviors.rotate , Behaviors.fade ] );

        explode.age = explodeAge;
        explode.max = explodeAge;

        this.engine.removeShape( shape );
    }


    showLevelComplete()
    {
        var bonus = this.level * 50;

        this.scoreboard.update( bonus );

        var f = this.engine.createShape( this.engine.levelComplete ).addBehaviors( [ Behaviors.fade ] );

        f.age = 150;
        f.max = 150;

        this.engine.moveShape( f , 0 , -155 );
    }
}
