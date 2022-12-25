
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

    } , { threshold :  0.3 /* when 30 percent of entry is visible */ } )

    document.querySelectorAll( '.work-sample' ).forEach( sample => intersection.observe( sample ) )
}


//----- When page loads.
window.addEventListener( 'load' , () => setTimeout( initWorkSamples , 300 ) )
