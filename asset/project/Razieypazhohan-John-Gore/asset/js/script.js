
    document.getElementsByClassName('click')[0].addEventListener('click', function () {
        document.getElementsByClassName('submenu')[0].style.right = '0'
    })
    document.getElementById('close').addEventListener('click', function () {
        document.getElementsByClassName('submenu')[0].style.right = '-40%'
    })
    function closeIntroduction(){
    document.getElementById('introduction').style.display = 'none'
}