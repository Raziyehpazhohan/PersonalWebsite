
// _slider .........
let _move = 0
let _windowwidth = document.getElementById('window').clientWidth
let _slidercount = document.querySelectorAll('#slider>div')
let _slider = document.getElementById('slider')
let _sliderwidth = document.getElementById('oneslider').clientWidth

// document.getElementById('introduction').addEventListener('click',()=>{
//     document.getElementById('introduction').style.display='none'
// })
_slider.style.width = _windowwidth*(_slidercount.length)+'px'

function _onemail(){
    _move++
    _slidermove()
}
function _onpassword(){
    _move++
    _slidermove()
}
function _slidermove(){
    if(_move < _slidercount.length){
        _slider.style.transform ='translateX(-'+(_move*_windowwidth)+'px)'
    }
}


// Login .........

class ShortStory{
    constructor(first,email,password){
        this.email = email;
        this.password = password;
        this.first = first;
    }
    login(){
        let newDivLogin = document.createElement('div')
        newDivLogin.innerHTML = `
        <p>${this.email}</p>
        <p>${this.password}</p>
        <hr>
        `
        return newDivLogin
    }
}

let i = 0
let myData = 0
let _main = document.querySelector('main')
let _targetDiv = document.getElementById('ApiDataList')
let _apiDataList = document.getElementById('ApiDataList')
let _inpEmail = document.getElementById('inpemail')
let _inpPassword = document.getElementById('inppassword')
let _beConnected = document.getElementById('successconnect')
let _svgLogin = document.getElementById('svgLogin')
let _divticksuccess = document.getElementById('divticksuccess')
let _ticksuccess = document.getElementById('ticksuccess')
let _tearsuccess = document.getElementById('tearsuccess')
let _svgtearsuccess1 = document.querySelector('#tearsuccess>svg:nth-of-type(1)')
let _svgtearsuccess2 = document.querySelector('#tearsuccess>svg:nth-of-type(2)')
let _svgtearsuccess3 = document.querySelector('#tearsuccess>svg:nth-of-type(3)')
let _svgtearsuccess4 = document.querySelector('#tearsuccess>svg:nth-of-type(4)')
let _svgtearsuccess5 = document.querySelector('#tearsuccess>svg:nth-of-type(5)')

fetch('https://randomuser.me/api/?results=6')
.then(res => res.json())
.then(data=> data.results)
.then(function(data){
    myData = data
    data.forEach(item => {
        let shstory = new ShortStory(item.name.first,item.email,item.login.password)
        _targetDiv.appendChild(shstory.login())
       
    });
})

function _openApiData(){
    _apiDataList.style.display = 'block'
}

function _closeApiData(){
    _apiDataList.style.display = 'none'
}

function _btnlogin(){

    for(i = 0; i < myData.length; i++){
        let _apiEmail = myData[i].email
        let _apiPassword = myData[i].login.password
        let _apiName = myData[i].name.first
        let _apiImg = myData[i].picture.large
        if((_inpEmail.value == _apiEmail ) && (_inpPassword.value== _apiPassword)){
            _inpEmail.style.border = '2px solid rgb(3, 245, 3)'
            _inpEmail.style.backgroundColor = 'green'
            _inpPassword.style.backgroundColor = 'green'
            _inpPassword.style.border = '2px solid rgb(3, 245, 3)'

            setTimeout(() => {
                _beConnected.style.width = '100%'
                _beConnected.style.height = '100%'
            }, 500);

            setTimeout(() => {
                _svgLogin.style.display = 'flex'
            }, 2000);

            setTimeout(() => {
                _divticksuccess.style.width = '140px'
                _divticksuccess.style.height = '140px'
            }, 4000);

            setTimeout(() => {
                _ticksuccess.style.display= 'flex'
            }, 5500);

            setTimeout(() => {
                _svgtearsuccess1.style.display='block'
                _svgtearsuccess2.style.display='block'
                _svgtearsuccess3.style.display='block'
                _svgtearsuccess4.style.display='block'
                _svgtearsuccess5.style.display='block'
                _tearsuccess.style.width='100%'
                _tearsuccess.style.height='100%'
            }, 5500);

            setTimeout(() => {
                _svgLogin.style.display = 'none'
                _divticksuccess.style.display = 'none'
                _ticksuccess.style.display= 'none'
                _svgtearsuccess1.style.display='none'
                _svgtearsuccess2.style.display='none'
                _svgtearsuccess3.style.display='none'
                _svgtearsuccess4.style.display='none'
                _svgtearsuccess5.style.display='none'
                _tearsuccess.style.display = 'none'

                let newSection = document.createElement('section')
                newSection.innerHTML = `
                <figure>
                <img src="${_apiImg}"></img>
                </figure>
                <h3>Hi ${_apiName}...!</h3>
                <h2>welcome</h2>
                <h5>💐💐💐💐💐💐💐💐💐💐💐💐</h5>
                <h4>Good time my friend</h4>
                `
                _main.appendChild(newSection)
            }, 7500);
        }else if(( "" == _inpEmail.value || "" == _inpPassword.value)){
            _inpEmail.style.backgroundColor = 'red'
            _inpPassword.style.backgroundColor = 'red'
        }
    }
  
}
