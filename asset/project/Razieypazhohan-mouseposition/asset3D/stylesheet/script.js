function _mymove(e){
let x = (e.clientX)-(e.target.offsetLeft)-((e.target.clientHeight))
let y = ((e.clientY))-(e.target.offsetTop)-((e.target.clientHeight))
document.getElementById('mycube').style.transform = 'rotate3d('+(y)+','+(y)+',0,'+(x)/80+'deg)'
console.log(x)
}

function _mymouse(e){
    let x = e.clientX
    let y = e.clientY
    document.getElementsByClassName('cs')[0].style.left=x+'px'
    document.getElementsByClassName('cs')[0].style.top=y+'px'
}