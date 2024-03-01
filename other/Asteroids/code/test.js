
"use strict";

class Test
{
    constructor( game )
    {
        this.game = game;

        var s1 = game.engine.createShape( game.engine.score );
        var s2 = game.engine.createShape( game.engine.gameOver );
        var s3 = game.engine.createShape( game.engine.extraShip );
        var s4 = game.engine.createShape( game.engine.levelComplete );

        this.game.engine.moveShape( s3 , 0 , -80  );
        this.game.engine.moveShape( s4 , 0 , -155 );

        /*
        var s1 = game.engine.createShape( game.engine.square    );
      //var s2 = game.engine.createShape( game.engine.ship      ).addBehaviors( [ Behaviors.rotate ] );
      //var s3 = game.engine.createShape( game.engine.asteroid  ).addBehaviors( [ Behaviors.rotate ] );
        var s4 = game.engine.createShape( game.engine.enemyShip ).addBehaviors( [ Behaviors.rotate ] );
        var s5 = game.engine.createShape( game.engine.bullet    );
        var s6 = game.engine.createShape( game.engine.safeArea  );

      //s2.rv = 0.50;
      //s3.rv = 0.50;
        s4.rv = 0.50;

      //var temp = game.engine.getGroupShape( s2 , 1 );
      //game.engine.setShapeVisibility( temp , true );
        */

        /*
        var  s1 = game.engine.createShape( game.engine.square ).addBehaviors( [ Behaviors.rotate ] );
        var  s2 = game.engine.createShape( game.engine.ship   ).addBehaviors( [ Behaviors.rotate ] );
        var  s3 = game.engine.createShape( game.engine.square , 0 , 0 , 0 , 0 , 0 );
        var  s4 = game.engine.createShape( game.engine.square , 0 , 0 , 0 , 0 , 0 );
        var  s5 = game.engine.createShape( game.engine.square );
        var  s6 = game.engine.createShape( game.engine.square );
        var  s7 = game.engine.createShape( game.engine.asteroid );
        var  s8 = game.engine.createShape( game.engine.enemyShip );
        var  s9 = game.engine.createShape( game.engine.bullet );
        var s10 = game.engine.createShape( game.engine.safeAreaTest );
        var s11 = game.engine.createShape( game.engine.score );

        s2.rv = 0.25;

        this.game.engine.setShapeScale( s3 , 2 );
        this.game.engine.moveShape( s3 , 100 , 100 );

        this.game.engine.moveShape( s5 , 100 , 100 );
        this.game.engine.setShapeRotation( s5 , 45 );

        this.game.engine.setShapeScale( s6 , 2 );
        this.game.engine.moveShape( s6 , -100 , 100 );
        this.game.engine.setShapeRotation( s6 , -10 );

        this.game.engine.moveShape( s7  ,  100 , -100 );
        this.game.engine.moveShape( s8  , -100 , -100 );
        this.game.engine.moveShape( s9  , -200 , -200 );
        this.game.engine.moveShape( s10 ,  225 ,  225 );
        this.game.engine.moveShape( s11 ,    0 , -300 );
        */
    }
}
