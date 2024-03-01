
"use strict";

class EngineCanvas
{
    constructor( canvasId )
    {
        //----- Setup Canvas
        var el = document.getElementById( canvasId );

        this.context = el.getContext( '2d' , { alpha : false } );

        this.context.canvas.width  = this.context.canvas.clientWidth;
        this.context.canvas.height = this.context.canvas.clientHeight;

        this.myGame = null;
        this.shapes = new Array();
    }


    updateStroke( shape )
    {
        if ( shape.isGroup != undefined )
        {
            shape.getPathList().forEach( path =>
            {
                if ( path.visible )
                {
                    this.context.strokeStyle = 'rgba( 255 , 255 , 255 , ' + shape.opacity + ' )';
                    this.context.lineWidth = path.lineWidth;
                    this.context.stroke( path );
                }
            });
        }
        else if ( shape.isText != undefined )
        {
            this.context.font = shape.font;

            if ( shape.noStroke )
            {
                this.context.fillStyle = 'white';
                this.context.fillText( shape.text , shape.xo + 0.5 , shape.yo + 0.5 );
            }
            else
            {
                this.context.lineWidth = shape.lineWidth;
                this.context.strokeStyle = 'rgba( 255 , 255 , 255 , ' + shape.opacity + ' )';
                this.context.strokeText( shape.text , shape.xo + 0.5 , shape.yo + 0.5 );
            }
        }
        else if ( shape.visible )
        {
            this.context.strokeStyle = 'rgba( 255 , 255 , 255 , ' + shape.opacity + ' )';
            this.context.lineWidth = shape.lineWidth;
            this.context.stroke( shape );
        }
    }


    updateShape( shape )
    {
        this.context.save();

        this.context.translate( shape.x - 0.5 , shape.y - 0.5 );
        this.context.scale( shape.scale , shape.scale );
        this.context.rotate( shape.rotation );

        this.updateStroke( shape );

        this.context.restore();
    }


    update()
    {
        this.context.clearRect( 0 , 0 , this.context.canvas.clientWidth , this.context.canvas.clientHeight );

        this.shapes.forEach( shape =>
        {
            this.updateShape( shape );

            shape.runBehaviors( this.myGame );
        });

        window.requestAnimationFrame( this.update.bind( this ) );
    }


    startGameLoop( game )
    {
        this.myGame = game;

        window.requestAnimationFrame( this.update.bind( this ) );
    }


    isCollision( shape1 , shape2 )
    {
        var d = Math.sqrt(
            Math.pow( shape1.x - shape2.x , 2 ) +
            Math.pow( shape1.y - shape2.y , 2 ) );

        var c = ( d - shape1.radius - shape2.radius ) <= 0;

        return c;
    }


    addShapeToGroup( shape , group )
    {
        group.addPath( shape );
    }


    moveShape( shape , xd , yd )
    {
        shape.x += xd;
        shape.y += yd;
    }


    removeShape( shape )
    {
        this.shapes = this.shapes.filter( x => x !== shape );
    }


    getGroupShape( group , index )
    {
        return group.getPath( index );
    }


    getAllShapes()
    {
        return this.shapes;
    }


    getShapePosition( shape )
    {
        //----- Must return { x , y } object
        var obj =
        {
            x : shape.x ,
            y : shape.y
        };

        return obj;
    }


    getShapeBounds( shape )
    {
        var halfWidth  = shape.width  / 2;
        var halfHeight = shape.height / 2;

        //----- Must return { top , left , bottom , right , width , height } object
        var obj =
        {
            width  : shape.width  ,
            height : shape.height ,

            left   : shape.x - halfWidth  ,
            right  : shape.x + halfWidth  ,

            top    : shape.y - halfHeight ,
            bottom : shape.y + halfHeight
        };

        return obj;
    }


    getViewBounds()
    {
        //----- Must return { top , left , bottom , right , width , height } object
        var obj =
        {
            top    : 0 ,
            left   : 0 ,
            right  : this.context.canvas.width  ,
            width  : this.context.canvas.width  ,
            height : this.context.canvas.height ,
            bottom : this.context.canvas.height
        };

        return obj;
    }


    getShapeRotationDegrees( shape )
    {
        return shape.rotation * ( 180 / Math.PI );
    }


    setShapeX( shape , x )
    {
        shape.x = x;
    }


    setShapeY( shape , y )
    {
        shape.y = y;
    }


    setShapeOpacity( shape , value )
    {
        shape.opacity = value;
    }


    setShapeStrokeWidth( shape , sw )
    {
        shape.lineWidth = sw;
    }


    setShapeVisibility( shape , booleanValue )
    {
        shape.visible = booleanValue;
    }


    setShapeScale( shape , amount )
    {
        shape.scale = amount;

        shape.width  *= amount;
        shape.height *= amount;
        shape.radius *= amount;
    }


    setShapeRotation( shape , degrees )
    {
        shape.rotation += degrees * ( Math.PI / 180 );
    }


    setTextContent( textShape , textContent )
    {
        textShape.text = textContent;
    }


    handleSafeAreaHitCheck( safeArea , game )
    {
        var isSafe = true;
        var shapes = game.engine.getAllShapes();

        if ( shapes.length )
        {
            for ( var i = 0; i < shapes.length; i++ )
            {
                var shape = shapes[ i ];

                if ( shape.name.indexOf( game.constants.anyAsteroid ) > 0 || shape.name.indexOf( game.constants.anyEnemy ) > 0 )
                {
                    if ( this.isCollision( shape , safeArea ) )
                    {
                        isSafe = false;
                        break;
                    }
                }
            }
        }

        if ( isSafe )
        {
            game.engine.removeShape( safeArea );
            game.player.createPlayer();
        }
    }


    handleBulletHitCheck( bullet , game )
    {
        var shapes = game.engine.getAllShapes();

        if ( shapes.length )
        {
            for ( var i = 0; i < shapes.length; i++ )
            {
                var shape = shapes[ i ];

                //----- Check asteroid collision
                if ( shape.name.indexOf( game.constants.anyAsteroid ) > 0 )
                {
                    if ( this.isCollision( shape , bullet ) )
                    {
                        game.engine.removeShape( bullet );
                        game.asteroids.killAsteroid( shape );
                        break;
                    }
                }

                //----- Check enemy collision
                if ( shape.name.indexOf( game.constants.anyEnemy ) > 0 )
                {
                    if ( this.isCollision( shape , bullet ) )
                    {
                        game.engine.removeShape( bullet );
                        game.enemies.killEnemy( true );
                        break;
                    }
                }

                //----- Check player collision
                if ( shape.name == game.constants.player && !game.player.waiting )
                {
                    if ( this.isCollision( shape , bullet ) )
                    {
                        game.player.killPlayer();
                        break;
                    }
                }
            }
        }
    }


    handleEnemyHitCheck( enemy , game )
    {
        var shapes = game.engine.getAllShapes();

        if ( shapes.length )
        {
            for ( var i = 0; i < shapes.length; i++ )
            {
                var shape = shapes[ i ];

                //----- Check asteroid collision
                if ( shape.name.indexOf( game.constants.anyAsteroid ) > 0 )
                {
                    if ( this.isCollision( shape , enemy ) )
                    {
                        game.enemies.killEnemy( false );
                        game.asteroids.killAsteroid( shape );
                        break;
                    }
                }
            }
        }
    }


    handlePlayerHitCheck( player , game )
    {
        var shapes = game.engine.getAllShapes();

        if ( shapes.length )
        {
            for ( var i = 0; i < shapes.length; i++ )
            {
                var shape = shapes[ i ];

                //----- Check asteroid collision
                if ( shape.name.indexOf( game.constants.anyAsteroid ) > 0 )
                {
                    if ( this.isCollision( shape , player ) )
                    {
                        game.player.killPlayer();
                        game.asteroids.killAsteroid( shape );
                        break;
                    }
                }

                //----- Check enemy collision
                if ( shape.name.indexOf( game.constants.anyEnemy ) > 0 )
                {
                    if ( this.isCollision( shape , player ) )
                    {
                        game.player.killPlayer();
                        game.enemies.killEnemy( true );
                        break;
                    }
                }
            }
        }
    }


    createShape( shapeCallback , xv , yv , rv , x , y )
    {
        var shape = this[ shapeCallback.name ]();

        shape.name = shapeCallback.name; // default name

        shape.xv = xv || 0;
        shape.yv = yv || 0;
        shape.rv = rv || 0;

        shape.age = 0; // for timed behaviors
        shape.max = 0; // for timed behaviors

        shape.scale     = 1;
        shape.visible   = 1;
        shape.rotation  = 0;
        shape.friction  = 1;  // no friction (values less than 1 increase friction)
        shape.behaviors = []; // list of behaviors to run during each frame of main animation loop

        if ( shape.opacity == undefined )
        {
            shape.opacity = 1;
        }

        if ( shape.lineWidth == undefined )
        {
            shape.lineWidth = 2;
        }

        if ( x == undefined && y == undefined )
        {
            shape.x = this.getViewBounds().width  / 2;
            shape.y = this.getViewBounds().height / 2;
        }
        else
        {
            shape.x = x;
            shape.y = y;
        }

        //----- Using radius for collision detection
        var br = this.getShapeBounds( shape );
        shape.radius = Math.max( br.width , br.height ) / 2;

        //----- Save to internal shape list
        this.shapes.push( shape );

        return shape;
    }


    square()
    {
        var p = new Path2D();

        p.width     = 150;
        p.height    = 150;
        p.lineWidth = 0.5;

        p.rect( 0.5 - ( p.width / 2 ) , 0.5 - ( p.height / 2 ) , p.width , p.height );

        p.moveTo( 0.5 - ( p.width / 2 ) , 0.5 );
        p.lineTo( 0.5 + ( p.width / 2 ) , 0.5 );

        p.moveTo( 0.5 , 0.5 - ( p.height / 2 ) );
        p.lineTo( 0.5 , 0.5 + ( p.height / 2 ) );

        return p;
    }


    bullet()
    {
        var p = new Path2D();

        p.width  = 1;
        p.height = 1;

        p.arc( 0.5 , 0.5 , 1 , 0 , Math.PI * 2 , true );

        return p;
    }


    safeArea()
    {
        var p = new Path2D();

        p.width  = 60;
        p.height = 60;

        p.arc( 0.5 , 0.5 , 60 , 0 , Math.PI * 2 , true );
        p.opacity = 0;

        return p;
    }


    safeAreaTest()
    {
        var p = new Path2D();

        p.width  = 60;
        p.height = 60;

        p.arc( 0.5 , 0.5 , 60 , 0 , Math.PI * 2 , true );

        return p;
    }


    ship()
    {
        var p1 = new Path2D();

        var xo = 11.5;
        var yo =  0.5;

        p1.moveTo(   0 + xo ,  0 + yo );
        p1.lineTo( -19 + xo ,  6 + yo );
        p1.lineTo( -17 + xo ,  3 + yo );
        p1.lineTo( -17 + xo , -3 + yo );
        p1.lineTo( -19 + xo , -6 + yo );
        p1.lineTo(   0 + xo ,  0 + yo );

        p1.lineWidth = 1.5;

        var p2 =  new Path2D();

        p2.moveTo( -20 + xo ,  4 + yo );
        p2.lineTo( -28 + xo ,  0 + yo );
        p2.lineTo( -20 + xo , -4 + yo );

        p2.lineWidth = 1;

        var g = new Path2DGroup();

        g.addPath( p1 );
        g.addPath( p2 , false );

        g.width  = 19;
        g.height = 12;

        return g;
    }


    availableShip()
    {
        var p1 = new Path2D();

        var xo = 8.5;
        var yo = 0.5;

        p1.moveTo(   0 + xo ,  0 + yo );
        p1.lineTo( -19 + xo ,  6 + yo );
        p1.lineTo( -17 + xo ,  3 + yo );
        p1.lineTo( -17 + xo , -3 + yo );
        p1.lineTo( -19 + xo , -6 + yo );
        p1.lineTo(   0 + xo ,  0 + yo );

        p1.lineWidth = 1.5;

        var p2 =  new Path2D();

        p2.moveTo( -20 + xo ,  4 + yo );
        p2.lineTo( -28 + xo ,  0 + yo );
        p2.lineTo( -20 + xo , -4 + yo );

        p2.lineWidth = 1;

        var g = new Path2DGroup();

        g.addPath( p1 );
        g.addPath( p2 , false );

        g.width  = 19;
        g.height = 12;

        return g;
    }


    score()
    {
        var p = new CanvasText( 'SCORE: ' , 15 , 0 , 0 , true );

        return p;
    }


    gameOver()
    {
        var p = new CanvasText( 'GAME OVER' , 90 , -275 , 25 , false );

        p.lineWidth = 1.5;

        return p;
    }


    extraShip()
    {
        var p = new CanvasText( 'EXTRA SHIP' , 70 , -205 , 10 , false );

        p.lineWidth = 1.5;

        return p;
    }


    levelComplete()
    {
        var p = new CanvasText( 'LEVEL COMPLETE' , 70 , -315 , 5 , false );

        p.lineWidth = 1.5;

        return p;
    }


    explosion()
    {
        var p1 = new Path2D();
        var p2 = new Path2D();
        var p3 = new Path2D();
        var p4 = new Path2D();

        p1.arc(  0.5 , -7.5 , 1 , 0 , Math.PI * 2 , true );
        p2.arc(  7.5 ,  0.5 , 1 , 0 , Math.PI * 2 , true );
        p3.arc(  0.5 ,  7.5 , 1 , 0 , Math.PI * 2 , true );
        p4.arc( -7.5 ,  0.5 , 1 , 0 , Math.PI * 2 , true );

        p1.lineWidth = 0.5;
        p2.lineWidth = 0.5;
        p2.lineWidth = 0.5;
        p2.lineWidth = 0.5;

        var g = new Path2DGroup();

        g.addPath( p1 );
        g.addPath( p2 );
        g.addPath( p3 );
        g.addPath( p4 );

        g.width  = 8;
        g.height = 8;

        return g;
    }


    asteroid()
    {
        var p = new Path2D();

        var xo =  -1.5;
        var yo = -65.5;

        p.moveTo(   0 + xo ,   0 + yo );
        p.lineTo(  20 + xo ,   5 + yo );
        p.lineTo(  40 + xo ,  15 + yo );
        p.lineTo(  50 + xo ,  45 + yo );
        p.lineTo(  70 + xo ,  65 + yo );
        p.lineTo(  65 + xo ,  95 + yo );
        p.lineTo(  30 + xo , 120 + yo );
        p.lineTo(   0 + xo , 130 + yo );
        p.lineTo( -20 + xo , 115 + yo );
        p.lineTo( -50 + xo , 105 + yo );
        p.lineTo( -55 + xo ,  75 + yo );
        p.lineTo( -65 + xo ,  50 + yo );
        p.lineTo( -50 + xo ,  25 + yo );
        p.lineTo( -20 + xo ,  15 + yo );
        p.lineTo(   0 + xo ,   0 + yo );

        p.width  = 135;
        p.height = 130;

        return p;
    }


    enemyShip()
    {
        var p = new Path2D();

        var xo =   0.5;
        var yo = -11.5;

        p.moveTo(  -5 + xo ,  0 + yo );
        p.lineTo(   5 + xo ,  0 + yo );
        p.lineTo(   8 + xo ,  6 + yo );
        p.lineTo(  20 + xo , 12 + yo );
        p.lineTo(   8 + xo , 20 + yo );
        p.lineTo(  -8 + xo , 20 + yo );
        p.lineTo( -20 + xo , 12 + yo );
        p.lineTo(  -8 + xo ,  6 + yo );
        p.lineTo(  -5 + xo ,  0 + yo );

        p.moveTo( -20 + xo , 12 + yo );
        p.lineTo(  20 + xo , 12 + yo );

        p.moveTo( -8 + xo , 6 + yo );
        p.lineTo(  8 + xo , 6 + yo );

        p.width  = 40;
        p.height = 20;

        return p;
    }
}


class Path2DGroup
{
    constructor()
    {
        this.isGroup = true;
        this.paths = new Array();
        this.behaviors = new Array();
    }

    addPath( p , booleanValue )
    {
        p.opacity = 1;
        p.visible = booleanValue == undefined ? true : booleanValue;

        this.paths.push( p );
    }

    getPath( index )
    {
        return this.paths[ index ];
    }

    getPathList()
    {
        return this.paths;
    }

    addBehaviors( behaviorCallbackList )
    {
        this.behaviors = behaviorCallbackList;

        return this; // allow chaining
    }

    runBehaviors( game )
    {
        if ( this.behaviors != undefined && this.behaviors.length > 0 )
        {
            this.behaviors.forEach( behavior =>
            {
                behavior( this , game );
            });
        }
    }
}


class CanvasText
{
    constructor( text , fontSize , xo , yo , noStroke )
    {
        this.xo = xo;
        this.yo = yo;
        this.text = text;
        this.isText = true;
        this.noStroke = noStroke;
        this.behaviors = new Array();
        this.font = fontSize + 'px sans-serif';
    }

    addBehaviors( behaviorCallbackList )
    {
        this.behaviors = behaviorCallbackList;

        return this; // allow chaining
    }

    runBehaviors( game )
    {
        if ( this.behaviors != undefined && this.behaviors.length > 0 )
        {
            this.behaviors.forEach( behavior =>
            {
                behavior( this , game );
            });
        }
    }
}


//----- Start extend Path2D

Path2D.prototype.addBehaviors = function( behaviorCallbackList )
{
    this.behaviors = behaviorCallbackList;

    return this; // allow chaining
}

Path2D.prototype.runBehaviors = function( game )
{
    if ( this.behaviors != undefined && this.behaviors.length > 0 )
    {
        this.behaviors.forEach( behavior =>
        {
            behavior( this , game );
        });
    }
}

//----- End extend Path2D
