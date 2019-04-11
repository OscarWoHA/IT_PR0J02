
function initializeHeaderAndFooter() {
    let header = $('header')
    let footer = $('footer')

    fetch('header.html')
    .then(data => data.text())
    .then(html => header.innerHTML = html)

    
    fetch('footer.html')
    .then(data => data.text())
    .then(html => footer.innerHTML = html)
}


// En "wrapper" rundt den vanlige document.querySelector-funksjonen
function $(query) {
    return document.querySelector(query)
}