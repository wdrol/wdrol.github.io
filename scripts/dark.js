
( function() {

    if ( localStorage.getItem( 'theme' ) == null )
    {
        localStorage.setItem( 'theme' , 'dark' ) // Default theme.
    }

    if ( localStorage.getItem( 'theme' ) == 'dark' )
    {
        document.documentElement.classList.add( 'dark' )
    }
    else
    {
        document.documentElement.classList.remove( 'dark' )
    }

} ) ()
