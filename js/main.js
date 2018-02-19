document.addEventListener('scroll', onScroll);

function onScroll () {
    var scrollPosition = window.scrollY,
        showHeaderPosition = 100;

    // Determine if position is at a certain point
    if (scrollPosition >= showHeaderPosition) {
        showHeader();
    } else {
        hideHeader();
    }
}