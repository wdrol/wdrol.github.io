
"use strict";

class SoundHowler
{
    constructor()
    {
        this.large   = new Howl( { src : './sounds/sfx/bangLarge.wav'  } );
        this.small   = new Howl( { src : './sounds/sfx/bangSmall.wav'  } );
        this.medium  = new Howl( { src : './sounds/sfx/bangMedium.wav' } );

        this.fire    = new Howl( { src : './sounds/sfx/fire.wav'        , volume : 0.7 } );
        this.saucer1 = new Howl( { src : './sounds/sfx/saucerBig.wav'   , volume : 0.2 , loop : true } );
        this.saucer2 = new Howl( { src : './sounds/sfx/saucerSmall.wav' , volume : 0.2 , loop : true } );

        this.setupExtraShip();
        this.setupBackgroundBeat();
    }


    setupExtraShip()
    {
        this.count = 0;

        this.extra = new Howl( { src : './sounds/sfx/extraShip.wav' , loop : true , onend : () =>
        {
            this.count++;
            this.extra.volume( this.extra.volume() - 0.1 );

            if ( this.count > 8 )
            {
                this.count = 0;
                this.extra.stop();
                this.extra.volume( 1 );
            }
        }});
    }


    setupBackgroundBeat()
    {
        var self = this;

        this.defaultBeatRate = 1650;

        this.beat1 = new Howl( { src : './sounds/sfx/beat1.wav' , volume : 2.3 , rate : 0.6 , onend : function()
        {
            self.time1 = setTimeout( function()
            {
                self.beat2.play();

            } , self.beatRate );
        }});

        this.beat2 = new Howl( { src : './sounds/sfx/beat2.wav' , volume : 2.3 , rate : 0.6 , onend : function()
        {
            self.time2 = setTimeout( function()
            {
                self.beat1.play();
                self.beatRate -= 75;

                if ( self.beatRate < 500 )
                {
                    self.beatRate = 500;
                }

            } , self.beatRate );
        }});
    }


    playLargeExplosion()
    {
        this.large.play();
    }


    playMediumExplosion()
    {
        this.medium.play();
    }


    playSmallExplosion()
    {
        this.small.play();
    }


    playExtraShip()
    {
        this.extra.play();
    }


    playFire()
    {
        this.fire.play();
    }


    playBeat()
    {
        this.beatRate = this.defaultBeatRate;
        this.beat1.play();
    }


    playLargeSaucer()
    {
        this.saucer1.play();
    }


    playSmallSaucer()
    {
        this.saucer2.play();
    }


    stopSaucer()
    {
        this.saucer1.stop();
        this.saucer2.stop();
    }


    stopBeat()
    {
        this.beatRate = this.defaultBeatRate;

        clearInterval( this.time1 );
        clearInterval( this.time2 );

        this.beat1.stop();
        this.beat2.stop();
    }
}
