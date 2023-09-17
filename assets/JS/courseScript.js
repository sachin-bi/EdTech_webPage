// var enroll = document.querySelectorAll(".enroll-box")

var enroll = document.querySelectorAll(".enroll-box")


enroll.forEach(function(val){
    var flag = 1
    val.addEventListener("click",function() {
        console.log("doing")
        
        if (flag==0) {
            val.style.backgroundColor = 'rgb(6, 141, 96)'
            val.innerHTML="Enroll"
            flag=1
        }else{
            val.style.backgroundColor = '#be4141'
            val.innerHTML="Unroll"
            flag=0
        }
    })
})