
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

    } , { threshold :  0.3 /* When 30 percent of item is visible. */ } )

    document.querySelectorAll( '.work-sample' ).forEach( sample => intersection.observe( sample ) )
}


//----- When page loads.
window.addEventListener( 'load' , () => setTimeout( initWorkSamples , 300 ) )
