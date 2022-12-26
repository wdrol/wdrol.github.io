
function initTheme()
{
    document.querySelector( '.toggle-dark' ).addEventListener( 'click' , ( event ) =>
    {
        event.preventDefault()

        if ( localStorage.getItem( 'theme' ) == 'dark' )
        {
            localStorage.setItem( 'theme' , '' )

            document.documentElement.classList.remove( 'dark' )
        }
        else
        {
            localStorage.setItem( 'theme' , 'dark' )

            document.documentElement.classList.add( 'dark' )
        }
    })
}


function initWorkSamples()
{
    const intersection = new IntersectionObserver( ( items , observer ) =>
    {
        items.forEach( item =>
        {
            if ( item.isIntersecting )
            {
                item.target.classList.add( 'show' )
                observer.unobserve( item.target )
            }
        })

    } , { threshold :  0.33 /* When 30 percent of item is visible. */ } )

    document.querySelectorAll( '.work-sample' ).forEach( sample => intersection.observe( sample ) )
}


function init()
{
    initTheme()
    initWorkSamples()
}


//----- When page loads.
window.addEventListener( 'load' , function()
{
    setTimeout( init , 175 )
})
