export const changeBackgroundColor = () => {
    var body = document.body;
    var scrollPosition = window.scrollY;

    // Change background color after scrolling 200 pixels
    if (scrollPosition > 200) {
        body.classList.add('scrolling');
    } else {
        body.classList.remove('scrolling');
    }
}

