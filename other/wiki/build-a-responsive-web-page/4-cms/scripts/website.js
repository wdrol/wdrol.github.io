
document.addEventListener( 'DOMContentLoaded' , function()
{
    const button  = document.getElementsByClassName( 'mobile-menu-button'  )
    const content = document.getElementsByClassName( 'mobile-menu-content' )

    //----- Handle mobile menu button clicks.
    if ( button.length > 0 && content.length > 0 )
    {
        button[0].addEventListener( 'click' , function()
        {
            //----- Toggle mobile menu content.
            content[0].classList.toggle( 'expanded' )
        })
    }
})
