(function () {
    const bar = document.getElementById('bar')
    const sidebar = document.getElementById('sidebar')

    bar.addEventListener('click', () => {
        sidebar.style.display = 'block'
    })  
})();

(function () {
    const cancal = document.getElementById('cancel')
    const sidebar = document.getElementById('sidebar')

    cancal.addEventListener('click', () => {
        sidebar.style.display = 'none'
    })
})();