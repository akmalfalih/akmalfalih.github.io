if(localStorage.getItem('preferredTheme') == 'dark') {
    setDarkMode(true)
}

function setDarkMode(isDark) {
    var darkBtn = document.getElementById('dark-mode')
    var lightBtn = document.getElementById('light-mode')

    if(isDark) {
        lightBtn.style.display = "block"
        darkBtn.style.display = "none" 
        document.body.style.backgroundColor = '#1a1a1a';
        document.body.style.color = '#ffb700';
        document.getElementById('navbar').style.backgroundColor = 'black';
        document.getElementById('img-container').style.backgroundColor = 'black';
        document.getElementById('footer').style.backgroundColor = 'black';
        document.getElementById('footer').style.color = 'white';
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.getElementById('navbar').style.backgroundColor = 'royalblue';
        document.getElementById('img-container').style.backgroundColor = 'skyblue';
        document.getElementById('footer').style.backgroundColor = 'royalblue';
        document.getElementById('footer').style.color = 'black';
        localStorage.removeItem('preferredTheme');
    }
}