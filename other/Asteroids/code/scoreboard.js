
"use strict";

class Scoreboard
{
    constructor( game )
    {
        this.game = game;
        this.extraShip = 10000;
        this.extraShipCount = this.extraShip;

        this.score = 0;
        this.scoreShape = this.game.engine.createShape( this.game.engine.score , 0 , 0 , 0 , 10 , 22 );
        this.scoreShape.name = 'scoreboard';

        this.update();
    }


    update( amount )
    {
        amount = amount || 0;

        this.score += amount;
        this.extraShipCount -= amount;
        this.game.engine.setTextContent( this.scoreShape , 'Score:  ' + this.score );

        //----- Check for bonus ship
        if ( this.extraShipCount <= 0 )
        {
            this.game.lives.addLife();
            this.extraShipCount += this.extraShip;
        }
    }
}
