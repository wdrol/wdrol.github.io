
"use strict";

class EngineTwo
{
    constructor( canvasId )
    {
        //----- Setup Two (see https://two.js.org/#basic-usage  or  https://code.tutsplus.com/tutorials/drawing-with-twojs--net-32024)
        var el = document.getElementById( canvasId );
        var pr = { width : el.offsetWidth , height : el.offsetHeight , type : Two.Types.canvas };

        this.two = new Two( pr ).appendTo( el );
    }


    startGameLoop( game )
    {
        var self = this;

        this.two.bind( 'update' , function( frameCount )
        {
            self.two.scene.children.forEach( child =>
            {
                if ( child.runBehaviors != undefined )
                {
                    child.runBehaviors( game );
                }
            });
        });

        this.two.play();
    }


    isCollision( shape1 , shape2 )
    {
        var d = Math.sqrt(
            Math.pow( shape1.translation.x - shape2.translation.x , 2 ) +
            Math.pow( shape1.translation.y - shape2.translation.y , 2 ) );

        var c = ( d - shape1.radius - shape2.radius ) <= 0;

        return c;
    }


    createGroup()
    {
        return this.two.makeGroup();
    }


    addShapeToGroup( shape , group )
    {
        group.add( shape );
    }


    moveShape( shape , xd , yd )
    {
        shape.translation.x += xd;
        shape.translation.y += yd;
    }


    removeShape( shape )
    {
         this.two.scene.remove( shape ); // remove shape via twojs api
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
        return this.two.scene.children;
    }


    getShapePosition( shape )
    {
        return shape.translation; // must return { x , y } object
    }


    getShapeBounds( shape )
    {
        return shape.getBoundingClientRect( false ); // must return { top , left , bottom , right , width , height } object
    }


    getViewBounds()
    {
        // must return { top , left , bottom , right , width , height } object
        var bounds =
        {
            top    : 0 ,
            left   : 0 ,
            right  : this.two.width  ,
            width  : this.two.width  ,
            height : this.two.height ,
            bottom : this.two.height
        }

        return bounds;
    }


    getShapeRotationDegrees( shape )
    {
        return shape.rotation * ( 180 / Math.PI ); // degrees
    }


    setShapeX( shape , x )
    {
        shape.translation.x = x;
    }


    setShapeY( shape , y )
    {
        shape.translation.y = y;
    }


    setShapeOpacity( shape , value )
    {
        shape.opacity = value;
    }


    setShapeStrokeWidth( shape , sw )
    {
        shape.linewidth = sw;
    }


    setShapeVisibility( shape , booleanValue )
    {
        shape.visible = booleanValue;
    }


    setShapeScale( shape , amount )
    {
        shape.scale   = amount;
        shape.radius *= amount;
    }


    setShapeRotation( shape , degrees )
    {
        shape.rotation += degrees * ( Math.PI / 180 );
    }


    setTextContent( textShape , textContent )
    {
        textShape.value = textContent;
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

        shape.friction  = 1;  // no friction (values less than 1 increase friction)
        shape.behaviors = []; // list of behaviors to run during each frame of main animation loop

        if ( x == undefined && y == undefined )
        {
            shape.translation.x = this.getViewBounds().width  / 2;
            shape.translation.y = this.getViewBounds().height / 2;
        }
        else
        {
            shape.translation.x = x;
            shape.translation.y = y;
        }

        //----- This api lacks collision detection, using radius for detection
        var br = this.getShapeBounds( shape );
        shape.radius = Math.max( br.width , br.height ) / 2;

        return shape;
    }


    square()
    {
        var p = this.two.makeRectangle( 0 , 0 , 50 , 50 );

        p.fill = 'black';
        p.stroke = 'white';
        p.linewidth = 2;

        return p;
    }


    bullet()
    {
        var p = this.two.makeCircle( 1 , 1 , 1 );

        p.fill = 'white';
        p.stroke = 'white';
        p.linewidth = 1;

        return p;
    }


    safeArea()
    {
        var p = this.two.makeCircle( 0 , 0 , 60 );

        p.fill = 'rgba( 0 , 0 , 0 , 0 )';
        p.noStroke();

        return p;
    }


    safeAreaTest()
    {
        var p = this.two.makeCircle( 0 , 0 , 60 );

        p.fill = 'rgba( 255 , 0 , 0 , .5 )';
        p.noStroke();

        return p;
    }


    ship()
    {
        var p1 = this.two.makePath(
              0 ,  0 ,
            -19 ,  6 ,
            -17 ,  3 ,
            -17 , -3 ,
            -19 , -6 , false );

        var p2 = this.two.makePath(
            -10 ,  4 ,
            -17 ,  0 ,
            -10 , -4 , true );

        p1.fill = 'black';
        p1.stroke = 'white';
        p1.linewidth = 1.5;
        p1.center();

        p2.noFill();
        p2.stroke = 'white';
        p2.opacity = 0;
        p2.linewidth = 1;

        var g = this.two.makeGroup( p1 , p2 );

        return g;
    }


    availableShip()
    {
        var p1 = this.two.makePath(
              0 ,  0 ,
            -19 ,  6 ,
            -17 ,  3 ,
            -17 , -3 ,
            -19 , -6 , false );

        var p2 = this.two.makePath(
            -10 ,  4 ,
            -17 ,  0 ,
            -10 , -4 , true );

        p1.fill = 'black';
        p1.stroke = 'white';
        p1.linewidth = 1.5;
        p1.center();

        p2.noFill();
        p2.stroke = 'white';
        p2.opacity = 0;
        p2.linewidth = 1;

        var g = this.two.makeGroup( p1 , p2 );

        return g;
    }


    score()
    {
        var p = this.two.makeText( 'SCORE: ' , 0 , 0 );

        p.noStroke();

        p.size = 15;
        p.fill = 'white';
        p.alignment = 'left';
        p.baseline = 'baseline';

        return p;
    }


    gameOver()
    {
        var p = this.two.makeText( 'GAME OVER' , 0 , 0 );

        p.size = 90;
        p.linewidth = 1;
        p.fill = 'black';
        p.stroke = 'white';
        p.baseline = 'middle';
        p.alignment = 'center';

        return p;
    }


    extraShip()
    {
        var p = this.two.makeText( 'EXTRA SHIP' , 0 , 0 );

        p.size = 70;
        p.fill = 'black';
        p.linewidth = .5;
        p.stroke = 'white';
        p.baseline = 'middle';
        p.alignment = 'center';

        return p;
    }


    levelComplete()
    {
        var p = this.two.makeText( 'LEVEL COMPLETE' , 0 , 0 );

        p.size = 70;
        p.fill = 'black';
        p.linewidth = .5;
        p.stroke = 'white';
        p.baseline = 'middle';
        p.alignment = 'center';

        return p;
    }


    explosion()
    {
        var p1 = this.two.makeCircle(  0 , -7 , 1 );
        var p2 = this.two.makeCircle(  7 ,  0 , 1 );
        var p3 = this.two.makeCircle(  0 ,  7 , 1 );
        var p4 = this.two.makeCircle( -7 ,  0 , 1 );

        p1.noFill();
        p1.stroke = 'white';
        p1.linewidth = 0.5;

        p2.noFill();
        p2.stroke = 'white';
        p2.linewidth = 0.5;

        p3.noFill();
        p3.stroke = 'white';
        p3.linewidth = 0.5;

        p4.noFill();
        p4.stroke = 'white';
        p4.linewidth = 0.5;

        var g = this.two.makeGroup( p1 , p2 , p3 , p4 );

        g.center();

        return g;
    }


    asteroid()
    {
        var p = this.two.makePath(
              0 ,   0 ,
             20 ,   5 ,
             40 ,  15 ,
             50 ,  45 ,
             70 ,  65 ,
             65 ,  95 ,
             30 , 120 ,
              0 , 130 ,
            -20 , 115 ,
            -50 , 105 ,
            -55 ,  75 ,
            -65 ,  50 ,
            -50 ,  25 ,
            -20 ,  15 , false );

        p.fill = 'black';
        p.stroke = 'white';
        p.linewidth = 2;

        return p;
    }


    enemyShip()
    {
        var p1 = this.two.makePath(
             -5 ,  0 ,
              5 ,  0 ,
              8 ,  6 ,
             20 , 12 ,
              8 , 20 ,
             -8 , 20 ,
            -20 , 12 ,
             -8 ,  6 , false );

        p1.fill = 'black';
        p1.stroke = 'white';
        p1.linewidth = 2;

        var p2 = this.two.makePath(
            -20 , 12 ,
             20 , 12 , true );

        p2.noFill();
        p2.stroke = 'white';
        p2.linewidth = 2;

        var p3 = this.two.makePath(
            -8 , 6 ,
             8 , 6 , true );

        p3.noFill();
        p3.stroke = 'white';
        p3.linewidth = 2;

        var g = this.two.makeGroup( p1 , p2 , p3 );

        g.center();

        return g;
    }
}


//----- Extend twojs

Two.Group.prototype.addBehaviors = function( behaviorCallbackList )
{
    this.behaviors = behaviorCallbackList;
    return this; // allow chaining
}

Two.Rectangle.prototype.addBehaviors = function( behaviorCallbackList )
{
    this.behaviors = behaviorCallbackList;
    return this; // allow chaining
}

Two.Circle.prototype.addBehaviors = function( behaviorCallbackList )
{
    this.behaviors = behaviorCallbackList;
    return this; // allow chaining
}

Two.Path.prototype.addBehaviors = function( behaviorCallbackList )
{
    this.behaviors = behaviorCallbackList;
    return this; // allow chaining
}

Two.Text.prototype.addBehaviors = function( behaviorCallbackList )
{
    this.behaviors = behaviorCallbackList;
    return this; // allow chaining
}

Two.Group.prototype.runBehaviors = function( game )
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

Two.Rectangle.prototype.runBehaviors = function( game )
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

Two.Circle.prototype.runBehaviors = function( game )
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

Two.Path.prototype.runBehaviors = function( game )
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

Two.Text.prototype.runBehaviors = function( game )
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
