var data_url=SERVER_PATH+"user";
fetch(data_url, {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
        "auth_token":  localStorage.getItem("auth-token")
    },
    cache: 'no-cache'
    
})
    .then((res) => res.json())
    .then(result => {
        var profile_detals = "";
        profile_detals += "<img src='img/profile.png' alt='profile' style='width:70%'/>";
        profile_detals += "<h4>FirstName: "+result.specific_user['firstname'] +"</h4>";
        profile_detals += "<h4>LastName: "+result.specific_user['lastname'] +"</h4>";
        profile_detals += "<h4>Email:"+result.specific_user['email'] +"</h4>";
        profile_detals += "<h4>Registered On:"+result.specific_user['registered_on'] +"</h4>";
        document.getElementById("profile").innerHTML = profile_detals;
    })

