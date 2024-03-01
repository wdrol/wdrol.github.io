
"use strict";

class Behaviors
{
    static rotate( shape , game )
    {
        game.engine.setShapeRotation( shape , shape.rv );
    }


    static move( shape , game )
    {
        shape.xv *= shape.friction;
        shape.yv *= shape.friction;

        game.engine.moveShape( shape , shape.xv , shape.yv );
    }


    static age( shape , game )
    {
        shape.age--;

        if ( shape.age < 0 )
        {
            game.engine.removeShape( shape );
        }
    }


    static fade( shape , game )
    {
        if ( shape.max != 0 )
        {
            game.engine.setShapeOpacity( shape , shape.age / shape.max );
        }

        Behaviors.age( shape , game );
    }


    static playerFade( shape , game )
    {
        Behaviors.fade( shape , game );

        if ( shape.age < 0 )
        {
            game.startNextLevel();
        }
    }


    static enemyFade( shape , game )
    {
        Behaviors.fade( shape , game );

        if ( shape.age < 0 )
        {
            game.enemies.randomAttack();
        }
    }


    static enemyRandomFire( shape , game )
    {
        if ( Math.random() * game.physics.enemyFireChance < 1 )
        {
            game.enemies.fire();
        }
    }


    static bulletHitCheck( shape , game )
    {
        game.engine.handleBulletHitCheck( shape , game );
    }


    static enemyHitCheck( shape , game )
    {
        game.engine.handleEnemyHitCheck( shape , game );
    }


    static playerHitCheck( shape , game )
    {
        game.engine.handlePlayerHitCheck( shape , game );
    }


    static safeAreaHitCheck( shape , game )
    {
        game.engine.handleSafeAreaHitCheck( shape , game );
    }


    static bounce( shape , game )
    {
        var vb = game.engine.getViewBounds();
        var sb = game.engine.getShapeBounds( shape );

        if ( sb.top  < 0 ) { shape.yv = -shape.yv; game.engine.moveShape( shape , 0 , -sb.top  ); }
        if ( sb.left < 0 ) { shape.xv = -shape.xv; game.engine.moveShape( shape , -sb.left , 0 ); }

        if ( sb.right  > vb.width  ) { shape.xv = -shape.xv; game.engine.moveShape( shape , -( sb.right - vb.width  ) , 0  ); }
        if ( sb.bottom > vb.height ) { shape.yv = -shape.yv; game.engine.moveShape( shape , 0 , -( sb.bottom - vb.height ) ); }
    }


    static wrap( shape , game )
    {
        var vb = game.engine.getViewBounds();
        var sb = game.engine.getShapeBounds( shape );

        var halfWidth  = sb.width  / 2;
        var halfHeight = sb.height / 2;

        if ( shape.ignoreSmartWrap )
        {
            halfWidth  = 0;
            halfHeight = 0;
        }

        if ( sb.left > vb.width  ) { game.engine.setShapeX( shape , -halfWidth  ); }
        if ( sb.top  > vb.height ) { game.engine.setShapeY( shape , -halfHeight ); }

        if ( sb.right  < 0 ) { game.engine.setShapeX( shape , vb.width  + halfWidth  ); }
        if ( sb.bottom < 0 ) { game.engine.setShapeY( shape , vb.height + halfHeight ); }
    }


    static enemyWrap( shape , game )
    {
        var vb = game.engine.getViewBounds();
        var sb = game.engine.getShapeBounds( shape );

        if ( ( shape.xv < 0 && sb.right < 0 ) || ( shape.xv > 0 && sb.left > vb.width ) )
        {
            game.engine.removeShape( shape );
            game.enemies.randomAttack();
            game.sounds.stopSaucer();
        }
        else
        {
            if ( Math.random() * game.physics.enemyDirectionChance < 1 )
            {
                shape.yv *= -1;
            }

            if ( sb.top > vb.height )
            {
                game.engine.setShapeY( shape , 0 );
            }

            if ( sb.bottom < 0 )
            {
                game.engine.setShapeY( shape , vb.height );
            }
        }
    }
}
