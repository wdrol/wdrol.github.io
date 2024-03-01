
"use strict";

class EnginePaper
{
    constructor( canvasId )
    {
        //----- Setup Paper (see http://paperjs.org/tutorials/paths/using-color-and-style/#current-style-of-the-project)
        paper.setup( canvasId );
        paper.project.currentStyle = { fillColor : 'black' , strokeColor : 'white' , strokeWidth : 2 };
    }


    startGameLoop( game )
    {
        paper.view.onFrame = event =>
        {
            paper.project.activeLayer.children.forEach( child =>
            {
                child.runBehaviors( game );
            });
        }
    }


    createGroup()
    {
        return new paper.Group();
    }


    addShapeToGroup( shape , group )
    {
        group.addChild( shape );
    }


    moveShape( shape , xd , yd )
    {
        shape.position.x += xd;
        shape.position.y += yd;
    }


    removeShape( shape )
    {
        shape.remove(); // remove shape via paperjs api
    }


    getAllGroupShapes( group )
    {
        return group.children;
    }


    getGroupShape( group , index )
    {
        return group.children[ index ];
    }


    getAllShapes()
    {
        return paper.project.activeLayer.children;
    }


    getShapePosition( shape )
    {
        return shape.position; // must return { x , y } object
    }


    getShapeBounds( shape )
    {
        return shape.bounds; // must return { top , left , bottom , right , width , height } object
    }


    getViewBounds()
    {
        return paper.project.view.bounds; // must return { top , left , bottom , right , width , height } object
    }


    getShapeRotationDegrees( shape )
    {
        return shape.rotation; // degrees
    }


    setShapeX( shape , x )
    {
        shape.position.x = x;
    }


    setShapeY( shape , y )
    {
        shape.position.y = y;
    }


    setShapeOpacity( shape , value )
    {
        shape.opacity = value;
    }


    setShapeStrokeWidth( shape , sw )
    {
        shape.strokeWidth = sw;
    }


    setShapeVisibility( shape , booleanValue )
    {
        shape.visible = booleanValue;
    }


    setShapeScale( shape , amount )
    {
        shape.scale( amount );
    }


    setShapeRotation( shape , degrees )
    {
        shape.rotate( degrees );
    }


    setTextContent( textShape , textContent )
    {
        textShape.content = textContent;
    }


    handleSafeAreaHitCheck( shape , game )
    {
        var safe = true;
        var posi = game.engine.getShapePosition( shape );
        var hits = paper.project.hitTestAll( posi );

        if ( hits != null && hits != undefined && hits.length )
        {
            hits.forEach( function( hit )
            {
                if ( hit.item.name != null && hit.item.name.indexOf( game.constants.anyAsteroid ) > 0 )
                {
                    safe = false;
                }
            });
        }

        if ( safe )
        {
            game.engine.getAllShapes().forEach( function( child )
            {
                if ( child.intersects( shape ) )
                {
                    safe = false;
                }
            });

            if ( safe )
            {
                game.engine.removeShape( shape );
                game.player.createPlayer();
            }
        }
    }


    handleBulletHitCheck( shape , game )
    {
        var pos  = game.engine.getShapePosition( shape );
        var hits = paper.project.hitTestAll( pos );

        if ( hits != null && hits != undefined && hits.length )
        {
            hits.forEach( function( hit )
            {
                if ( hit.item.name != null )
                {
                    if ( hit.item.name.indexOf( game.constants.anyAsteroid ) > 0 )
                    {
                        game.engine.removeShape( shape );
                        game.asteroids.killAsteroid( hit.item );
                    }

                    if ( hit.item.name.indexOf( game.constants.anyEnemy ) > 0 )
                    {
                        game.engine.removeShape( shape );
                        game.enemies.killEnemy( true );
                    }

                    if ( hit.item.name == game.constants.player && !game.player.waiting )
                    {
                        game.player.killPlayer();
                    }
                }
            });
        }
    }


    handleEnemyHitCheck( shape , game )
    {
        game.engine.getAllShapes().forEach( function( child )
        {
            if ( child.intersects( shape ) )
            {
                if ( child.name != null && child.name.indexOf( game.constants.anyAsteroid ) > 0 )
                {
                    game.enemies.killEnemy( false );
                    game.asteroids.killAsteroid( child );
                }
            }
        });
    }


    handlePlayerHitCheck( shape , game )
    {
        game.engine.getAllShapes().forEach( function( child )
        {
            if ( child.intersects( shape ) )
            {
                if ( child.name != null )
                {
                    if ( child.name.indexOf( game.constants.anyAsteroid ) > 0 )
                    {
                        game.player.killPlayer();
                        game.asteroids.killAsteroid( child );
                    }

                    if ( child.name.indexOf( game.constants.anyEnemy ) > 0 )
                    {
                        game.player.killPlayer();
                        game.enemies.killEnemy( true );
                    }
                }
            }
        });
    }


    createShape( shapeCallback , xv , yv , rv , x , y )
    {
        var shape = shapeCallback();

        shape.name = shapeCallback.name; // default name

        shape.xv = xv || 0;
        shape.yv = yv || 0;
        shape.rv = rv || 0;

        shape.age = 0; // for timed behaviors
        shape.max = 0; // for timed behaviors

        shape.friction    = 1;     // no friction (values less than 1 increase friction)
        shape.behaviors   = [];    // list of behaviors to run during each frame of main animation loop
        shape.applyMatrix = false; // paperjs setting needed to track rotation values (otherwise shape.rotation yields zero)

        if ( x == undefined && y == undefined )
        {
            shape.position.x = this.getViewBounds().width  / 2;
            shape.position.y = this.getViewBounds().height / 2;
        }
        else
        {
            shape.position.x = x;
            shape.position.y = y;
        }

        return shape;
    }


    square()
    {
        var p = new paper.Path.Rectangle( 0 , 0 , 50 , 50 );

        return p;
    }


    bullet()
    {
        var p = new paper.Path.Circle( 1 , 1 , 1 );

        return p;
    }


    safeArea()
    {
        var p = new paper.Path.Circle( 0 , 0 , 60 );

        p.fillColor = 'rgba( 0 , 0 , 0 , 0 )';
        p.strokeWidth = 0;

        return p;
    }


    safeAreaTest()
    {
        var p = new paper.Path.Circle( 0 , 0 , 60 );

        p.fillColor = 'rgba( 255 , 0 , 0 , 0.5 )';
        p.strokeWidth = 0;

        return p;
    }


    ship()
    {
        var p1 = new paper.Path();

        p1.moveTo(   0 ,  0 );
        p1.lineTo( -19 ,  6 );
        p1.lineTo( -17 ,  3 );
        p1.lineTo( -17 , -3 );
        p1.lineTo( -19 , -6 );
        p1.lineTo(   0 ,  0 );

        p1.strokeWidth = 1.5;

        var p2 = new paper.Path();

        p2.moveTo( -20 ,  4 );
        p2.lineTo( -28 ,  0 );
        p2.lineTo( -20 , -4 );

        p2.visible = false;
        p2.strokeWidth = 1;

        var g = new paper.Group( p1 , p2 );

        return g;
    }


    availableShip()
    {
        var p1 = new paper.Path();

        p1.moveTo(   0 ,  0 );
        p1.lineTo( -19 ,  6 );
        p1.lineTo( -17 ,  3 );
        p1.lineTo( -17 , -3 );
        p1.lineTo( -19 , -6 );
        p1.lineTo(   0 ,  0 );

        p1.strokeWidth = 1.5;

        var p2 = new paper.Path();

        p2.moveTo( -20 ,  4 );
        p2.lineTo( -28 ,  0 );
        p2.lineTo( -20 , -4 );

        p2.visible = false;
        p2.strokeWidth = 1;

        var g = new paper.Group( p1 , p2 );

        return g;
    }


    score()
    {
        var p = new paper.PointText
        ({
            fontSize      : 15      ,
            fillColor     : 'white' ,
            strokeWidth   : 0       ,
            justification : 'left'
        });

        return p;
    }


    gameOver()
    {
        var p = new paper.PointText
        ({
            content       : 'GAME OVER' ,
            fontSize      : 90          ,
            fillColor     : 'black'     ,
            strokeWidth   : 1           ,
            justification : 'center'
        });

        return p;
    }


    extraShip()
    {
        var p = new paper.PointText
        ({
            content       : 'EXTRA SHIP' ,
            fontSize      : 70           ,
            fillColor     : 'black'      ,
            strokeWidth   : .5           ,
            justification : 'center'
        });

        return p;
    }


    levelComplete()
    {
        var p = new paper.PointText
        ({
            content       : 'LEVEL COMPLETE' ,
            fontSize      : 70      ,
            fillColor     : 'black' ,
            strokeWidth   : .5      ,
            justification : 'center'
        });

        return p;
    }


    explosion()
    {
        var p1 = new paper.Path.Circle(  0 , -7 , .5 );
        var p2 = new paper.Path.Circle(  7 ,  0 , .5 );
        var p3 = new paper.Path.Circle(  0 ,  7 , .5 );
        var p4 = new paper.Path.Circle( -7 ,  0 , .5 );

        var g = new paper.Group( p1 , p2 , p3 , p4 );

        g.strokeWidth = 0.5;

        return g;
    }


    asteroid()
    {
        var p = new paper.Path();

        p.moveTo(   0 ,   0 );
        p.lineTo(  20 ,   5 );
        p.lineTo(  40 ,  15 );
        p.lineTo(  50 ,  45 );
        p.lineTo(  70 ,  65 );
        p.lineTo(  65 ,  95 );
        p.lineTo(  30 , 120 );
        p.lineTo(   0 , 130 );
        p.lineTo( -20 , 115 );
        p.lineTo( -50 , 105 );
        p.lineTo( -55 ,  75 );
        p.lineTo( -65 ,  50 );
        p.lineTo( -50 ,  25 );
        p.lineTo( -20 ,  15 );
        p.lineTo(   0 ,   0 );

        return p;
    }


    enemyShip()
    {
        var p1 = new paper.Path();

        p1.moveTo(  -5 ,  0 );
        p1.lineTo(   5 ,  0 );
        p1.lineTo(   8 ,  6 );
        p1.lineTo(  20 , 12 );
        p1.lineTo(   8 , 20 );
        p1.lineTo(  -8 , 20 );
        p1.lineTo( -20 , 12 );
        p1.lineTo(  -8 ,  6 );
        p1.lineTo(  -5 ,  0 );

        var p2 = new paper.Path();

        p2.moveTo( -20 , 12 );
        p2.lineTo(  20 , 12 );

        var p3 = new paper.Path();

        p3.moveTo( -8 , 6 );
        p3.lineTo(  8 , 6 );

        var g = new paper.Group( p1 , p2 , p3 );

        return g;
    }
}


//----- Extend paperjs

paper.Item.prototype.addBehaviors = function( behaviorCallbackList )
{
    this.behaviors = behaviorCallbackList;
    return this; // allow chaining
}


paper.Item.prototype.runBehaviors = function( game )
{
    if ( this.behaviors != undefined && this.behaviors.length > 0 )
    {
        var self = this;

        self.behaviors.forEach( function( behavior )
        {
            behavior( self , game );
        });
    }
}
