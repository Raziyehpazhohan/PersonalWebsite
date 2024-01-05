
let r = 3
let i = 0
let myData = ' '
fetch('https://randomuser.me/api/?results=30')
.then(function(response){
    if(!response.ok){
        console.log('response not get' + response.status);
        return;
    }
    response.json().then(function(data){
       myData= data.results
       _loading(myData)
    });
})
.catch(function (err) {
    document.write('Error: ' + err);
});
function _Loadmore(){
    r+=3
    _loading(myData)
}
document.getElementById('loadless').addEventListener('click', ()=>{
    let _x1 = document.querySelector('article>div:nth-last-of-type(1)')
    let _x2 = document.querySelector('article>div:nth-last-of-type(2)')
    let _x3 = document.querySelector('article>div:nth-last-of-type(3)')
    _x1.remove()
    _x2.remove()
    _x3.remove()
});
function _loading(val){
    for(i;i<r;i++){
        let _ND = document.createElement('Div')
        _ND.innerHTML =`
            <div>
                <section>
                    <figure>
                        <img src="${val[i].picture.thumbnail}" alt="">
                    </figure>
                </section>
                <section>
                    <h3 id='myfullname'>${val[i].name.first} ${val[i].name.last}</h3>
                    <p>${val[i].email}</p>
                    <p>${val[i].location.country}</p>
               
                </section>
            </div>
            <div>
            <button>HTTPS</button>
            <button>Auth:OAuth</button>
        </div>
        <div>
            <button>APIDocumentation</button>
            <button id="mydetails" onclick='_mydetails(this)' data-phone='${val[i].phone}' data-name='${val[i].name.first} ${val[i].name.last}' src='${val[i].picture.thumbnail}' data-large='${val[i].picture.large}' data-age='${val[i].dob.age}' data-email='${val[i].email}' data-country='${val[i].location.country}' data-city='${val[i].location.city}'>Click to see Details</button>
        </div>
        `
        document.getElementById('mydiv').appendChild(_ND)
    }
}


function _mysearch(){
    let _alldiv = document.querySelectorAll('article>div')
    let _allFN = document.querySelectorAll('h3')
    let flag = 0
    if(
        (document.getElementById('notfound')) != null
    ){
        document.getElementById('notfound').remove()
    }
    console.log(_allFN.length)
    let _myinp = document.getElementById('inpsearch').value
    if(_myinp.length != 0){
        for(i=0; i<_allFN.length; i++){
            _alldiv[i].style.display='none'
            if(
                ((_allFN[i].innerText).substring(0, _myinp.length)) == _myinp
            ){
                _alldiv[i].style.display = 'flex'
                flag++
            }
        }
        if(flag == 0){
            _notfounddiv =  document.createElement('h4')
            _notfounddiv.setAttribute('id', 'notfound')
             _notfounddiv.innerHTML='Sorry...Not Found'
             _notfounddiv.style.display='block'
             document.getElementById('mylistitem').appendChild(_notfounddiv)
         }
    }else{
        for(i=0; i<_allFN.length; i++){
            _alldiv[i].style.display='flex'
        }
    }


   
}

function _mydetails(self){
    document.querySelector('main>section').style.display='block'
    x = self.getAttribute('data-large')
    bigname = self.getAttribute('data-name')
    bigage = self.getAttribute('data-age')
    bigemail = self.getAttribute('data-email')
    bigcountry = self.getAttribute('data-country')
    bigcity = self.getAttribute('data-city')
    bigphone = self.getAttribute('data-phone')
    document.querySelector('#mybigdetails>img').setAttribute('src', x)
    document.querySelector('#bigfullname').innerHTML='<b>FullName :&nbsp;&nbsp;</b>  ' + bigname
    document.querySelector('#bigage').innerHTML='<b>Age :&nbsp;&nbsp;</b>' + bigage 
    document.querySelector('#bigemail').innerHTML='<b>Email :&nbsp;&nbsp;</b>' + bigemail
    document.querySelector('#bigphone').innerHTML='<b>Phone :&nbsp;&nbsp;</b>' + bigphone
    document.querySelector('#bigcountry').innerHTML ='<b>Country :&nbsp;&nbsp;</b>' + bigcountry
    document.querySelector('#bigcity').innerHTML ='<b>City :&nbsp;&nbsp;</b>'+ bigcity
}
document.querySelector('main>section>div>span').addEventListener('click', function(){
    document.querySelector('main>section').style.display='none'
   
})


