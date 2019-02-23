var data_url=SERVER_PATH+"users";
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
        if(result.status === 200 || result.status === 404 || result.status ==="failed"){
                var i = 0;
                
                var data = '<table>'+
                                 '<tr> <th>User id</th><th>FirstName</th><th>LastName</th><th>Email</th><th>Created On</th><th>IsAdmin</th><th>Actions</th></tr>';
                if(result.status ==="failed"){
                    window.location.href = "login.html"
                    alert(result.message)
                }
                else if(result.status != 404){
                    for(i=0; i < result.data.length; i++){
                        data +=  '<tr><td>'+result.data[i]["user_id"]+'</td><td>'+result.data[i]["firstname"]+'</td><td>'+result.data[i]["lastname"]+'</td><td>'+result.data[i]["email"]+'</td><td>'+result.data[i]["registered_on"]+ '<td>'+result.data[i]["isadmin"]+'</td><td><button onclick="update_user('+result.data[i]["user_id"]+')">Change</td></button></tr>';
                        
                    document.getElementById("users_table").innerHTML = data+"</table>";
                }
            }
                else{
                    
                    document.getElementById("users_table").innerHTML = data +"<tr><td colspan='9'>There are no users yet!</td></tr></table>";
                }         

        }
        else{
            alert(alert(JSON.stringify(result)));
        }
        
    })