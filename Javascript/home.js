if(localStorage.getItem('preferredTheme') == 'dark') {
    setDarkMode(true)
}

function setDarkMode(isDark) {
    var darkBtn = document.getElementById('dark-mode')
    var lightBtn = document.getElementById('light-mode')

    if(isDark) {
        lightBtn.style.display = "block"
        darkBtn.style.display = "none" 
        document.getElementById('navbar').style.backgroundColor = 'black';
        document.body.style.backgroundColor = '#1a1a1a';
        document.getElementById('header').style.color = '#ffb700';
        document.getElementById('content').style.backgroundColor = 'black';
        document.getElementById('content').style.marginLeft = '8vw';
        document.getElementById('content').style.marginRight = '8vw';
        document.getElementById('content').style.marginBottom = '45px';
        document.getElementById('content').style.borderRadius = '20px';
        document.getElementById('about-me').style.color = 'white';
        document.getElementById('footer').style.backgroundColor = 'black';
        document.getElementById('footer').style.color = 'white';
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
        document.getElementById('navbar').style.backgroundColor = 'royalblue';
        document.body.style.backgroundColor = 'white';
        document.getElementById('header').style.color = 'black';
        document.getElementById('content').style.backgroundColor = 'skyblue';
        document.getElementById('content').style.margin = '0px';
        document.getElementById('content').style.borderRadius = '0px';
        document.getElementById('about-me').style.color = 'black';
        document.getElementById('footer').style.backgroundColor = 'royalblue';
        document.getElementById('footer').style.color = 'black';
        localStorage.removeItem('preferredTheme');
    }
}