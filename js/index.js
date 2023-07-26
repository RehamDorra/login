var userName = document.getElementById("username")
 var signupEmail = document.getElementById("signupemail")
 var signupPassword = document.getElementById("signuppassword")


var signupArray=[]

 if (localStorage.getItem("whouse") != null) {
 signupArray = JSON.parse( localStorage.getItem("whouse"))
}


function signup(){
        var signup = {
            Name: userName.value,
            Email: signupEmail.value,
            password: signupPassword.value,
        }
    
     if(areinputsempty() == false){
        document.querySelector("#mustwrite").classList.remove("d-none")
        return false
     }

     if(areinputsempty() == true){

    if(isemailexist() == false){
    document.querySelector("#emailexist").classList.remove("d-none")
    document.querySelector("#mustwrite").classList.add("d-none")
    document.querySelector("#success").classList.add("d-none")
    return false
 }
 if(isemailexist() == true ){
    signupArray.push(signup)
    localStorage.setItem("whouse" , JSON.stringify(signupArray))
    document.querySelector("#success").classList.remove("d-none")
    document.querySelector("#mustwrite").classList.add("d-none")
    document.querySelector("#emailexist").classList.add("d-none")
    return true
}
    document.querySelector("#mustwrite").classList.add("d-none")
    signupArray.push(signup)
    localStorage.setItem("whouse" , JSON.stringify(signupArray))
    console.log(signupArray)
    return true
     }

    }

    ////////////Are inputs empty?//////////////
    function areinputsempty(){
        if(userName.value == "" || signupEmail.value == "" || signupPassword.value == ""){
            console.log("fgh")
            return false
        }
        return true
    }

    ////////Email existence//////////
   
    function isemailexist(){       
        for(var i = 0 ; i < signupArray.length ; i++){
            if(signupArray[i].Email == signupEmail.value){
                console.log(signupArray[i].Email.value)
                return false
            }
        }
        return true
    }

    ///////////////////////////////////////////////////////////////////////////////////////////

    var loginemail = document.getElementById("loginemail")
    var loginpassword = document.getElementById("loginpassword")



   function login(){

        if(areLoginInputsEmpty() == false ){
            document.querySelector("#parlogin").innerHTML=`<span class="text-danger m-3">All inputs are required</span>`
        }
        if(loginmatching() == true){
        document.querySelector(".login").innerHTML=` <button class="btn btn-outline-info my-3 w-100" id="login"><a href="welcome.html"> Login </a></button>`
        }
        if(loginmatching() == false){
        document.querySelector("#parlogin").innerHTML=`<span class="text-danger m-3">incorrect email or password</span>`
        }
    }

    function areLoginInputsEmpty(){
        if(loginemail.value == "" | loginpassword.value == ""){
            return false
        }
        return true
    }

    function loginmatching(){

        for(var i = 0 ; i < signupArray.length ; i++){
            if(signupArray[i].Email == loginemail.value && signupArray[i].password == loginpassword.value){
               return true
            }
        }
        return false
    }
////////////////////////////////////////////////////////////////////////////////////////////////////////
