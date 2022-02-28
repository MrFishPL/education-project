// Burger menu
document.querySelector('.burger').addEventListener('click', function()
{
    this.classList.toggle("active");
})

// //scroll 
// $(window).on('scroll', function()
// {
//     const windowHeight = $(window).height();
//     const scrollFromTop = $(this).scrollTop();

//     const $row2 = $('.row1:nth-of-type(1)');
//     const row2Height = $row2.outerHeight();
//     const row2FromTop = $row2.offset().top;

//     const $row3 = $('.row1:nth-of-type(2)');
//     const row3Height = $row3.outerHeight();
//     const row3FromTop = $row3.offset().top;

//     const $row4 = $('.row2:nth-of-type(2)');
//     const row4Height = $row4.outerHeight();
//     const row4FromTop = $row4.offset().top;

//     if (scrollFromTop > row2FromTop + row2Height - windowHeight)
//         $row2.addClass("active");

//     // Czysciciel
//     if (scrollFromTop < 100)
//         $('.row').removeClass("active");
// })