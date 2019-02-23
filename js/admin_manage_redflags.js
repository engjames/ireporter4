var incidents_url=SERVER_PATH+"redflags";
fetch(incidents_url, {
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
        if(result.status === 'success'){
            var i = 0;
            
            var incidents = '<table border="1">'+
                                '<tr> <th>#</th><th>user_id</th><th>title</th><th>Comment</th><th>Category</th><th>Location</th><th>Image</th><th>Status</th><th>Created On</th><th>Actions</th></tr>';
            
            if(result.message != "There exists no Redflag"){
                for(i=0; i < result.incidents.length; i++){
                    incidents +=  '<tr><td>'+String(i+1)+'</td><td>'+result.incidents[i]["createdby"]+'</td><td>'+result.incidents[i]["title"]+'</td><td>'+result.incidents[i]["comment"]+'</td><td>'+result.incidents[i]["category"]+'</td><td>'+result.incidents[i]["location"]+'</td><td>'+result.incidents[i]["image"]+'</td><td>'+result.incidents[i]["status"]+'</td><td>'+result.incidents[i]["createdOn"]+'</td><td><button onclick="update_status('+result.incidents[i]["incident_id"]+', '+result.incidents[i]["user_id"]+')" id="'+result.incidents[i]["incident_id"]+'">Update status</button></td></tr>';
                }
                document.getElementById("incidents_table").innerHTML = incidents+"</table>";
            }else{
                document.getElementById("incidents_table").innerHTML = incidents +"<tr><td colspan='9'>There are not red-flags yet!</td></tr></table>";
            }
        }
        else{
            alert(alert(JSON.stringify(result)));
        }
        
    })
