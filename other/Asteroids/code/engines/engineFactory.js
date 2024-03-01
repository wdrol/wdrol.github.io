
"use strict";

class EngineFactory
{
    static getGameEngine( engineName , canvasId )
    {
        if ( engineName == "canvasjs" )
        {
            return new EngineCanvas( canvasId )
        }

        if ( engineName == "paperjs" )
        {
            return new EnginePaper( canvasId )
        }

        if ( engineName == "twojs" )
        {
            return new EngineTwo( canvasId )
        }
    }
}
