
"use strict";

class SoundFactory
{
    static getGameSounds( soundApiName )
    {
        if ( soundApiName == "howlerjs" )
        {
            return new SoundHowler()
        }

        if ( soundApiName == "noSounds" )
        {
            return new SoundMuter()
        }
    }
}
