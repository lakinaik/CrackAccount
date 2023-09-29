

function entry(){
    return new Promise((resolved, reject)=>{
        let entry = document.querySelector(".entry")
        let hacking = document.querySelector(".hacking")
        entry.style.display = 'none'
        hacking.style.display = 'block'
        resolved();
    })

}
function warning(){
    return new Promise((resolved,reject)=>{
        let warn = document.querySelector('.warning')
        let hacking = document.querySelector(".hacking")
        let audio = document.getElementById("myAudio")
        hacking.style.display = 'none'
        warn.style.display = 'flex'
        audio.play()
        resolved();
        setTimeout(()=>{
            var exitBtn = document.createElement("button")
            exitBtn.innerHTML = "Need help???"
            exitBtn.className = "exitBtn"
            document.querySelector('.warning').appendChild(exitBtn)
            exitBtn.addEventListener('click',()=>{
                let audio = document.getElementById("myAudio")
                let final = document.querySelector(".final")
                let warning = document.querySelector(".warning")
                audio.pause()
                warning.style.display = 'none'
                final.style.display = 'flex'
                final.innerHTML = `<video autoplay loop controls>
                <source src="Assets/videoplayback.mp4" type="video/mp4" id="majak">
            </video>`
            exitBtn.style.display = 'none'

            })
        },3000)
    })
   
}


function fetching(){
    return new Promise((resolved, reject)=>{
        setTimeout(() => {
        document.querySelector(".hacking").innerHTML +=` <h1>Fetching account data...</h1>`
            resolved("success");
        },200);
    })
}
function found(){
    return new Promise ((resolved, reject)=>{
        setTimeout(() => {
            document.querySelector(".hacking").innerHTML = ""
            document.querySelector(".hacking").innerHTML +=` <h1>User account found...</h1>`
      
            resolved();
        }, 3000);
    })
    
}
function hacking(){
    return new Promise((resolved,reject)=>{
        setTimeout(() => {
            document.querySelector(".hacking").innerHTML = ""
            document.querySelector(".hacking").innerHTML +=` <h1>Hacking the account...</h1>`
            resolved();
        }, 3000);
    })

}

function hacked(){
    return new Promise((resolved, reject)=>{
        setTimeout(() => {
            document.querySelector(".hacking").innerHTML = ""
            document.querySelector(".hacking").innerHTML +=` <h1>You Got Hacked...</h1>`
            resolved();
        }, 3000);
    })
}



let btn = document.querySelector('.btn')
btn.addEventListener('click',(e)=>{
    e.preventDefault;
    let input = document.getElementById("inp").value
    if(input.length == 0){
        alert("must enter username")
        return;
    }else{
       entry().then(fetching).then(found).then(hacking).then(hacked).then(warning)
    }
   
})
