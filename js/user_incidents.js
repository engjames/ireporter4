var data_url=SERVER_PATH+"user_incidents";
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
                                '<button id="modalBtn" class="button" onclick="addIncidentRecord()"> + Records</button>'+
                                 '<tr> <th>#</th><th>title</th><th>Comment</th><th>Category</th><th>Location</th><th>Image</th><th>Status</th><th>Created On</th><th>Actions</th></tr>';
                if(result.status ==="failed"){
                   
                    
                    window.location.href = "login.html"
                    alert(result.message)
                }
                else if(result.status != 404){
                    for(i=0; i < result.data.length; i++){
                        if(result.data[i]["category"] === "red-flag"){
                            category = 1
                        }
                        else{
                            category = 0
                        }
                        hidden_id = "e"+result.data[i]["incident_id"];
                        data +=  '<tr><td>'+String(i+1)+'</td><td>'+result.data[i]["title"]+'</td><td>'+result.data[i]["comment"]+'</td><td>'+result.data[i]["category"]+'</td><td>['+result.data[i]["location"]+']</td><td>'+result.data[i]["image"]+'</td><td>'+result.data[i]["status"]+'</td><td>'+result.data[i]["createdOn"]+'</td><td><input type="hidden" id="'+hidden_id+'" value="'+result.data[i]["comment"]+'"><button onclick="EditIncidentRecord('+result.data[i]["incident_id"]+','+result.data[i]["createdby"]+',['+result.data[i]["location"]+'])" id="'+result.data[i]["incident_id"]+'">Edit</button>  <button onclick="mydeleteFunction('+result.data[i]["incident_id"]+','+category+')">Delete</button></td></tr>';
                    }
                    document.getElementById("incidents_table").innerHTML = data+"</table>";
                }else{
                    
                    document.getElementById("incidents_table").innerHTML = data +"<tr><td colspan='9'>There are no incidents yet!</td></tr></table>";
                }
        }
        else{
            alert(alert(JSON.stringify(result)));
        }
        
    })


function getUrl(){
 
    var title = document.getElementById('title').value;
    var comment = document.getElementById('comment').value;
    var category = document.getElementById('category').value;
    var longitude = document.getElementById('longitude').value;
    var latitude = document.getElementById('latitude').value;
    
    var location = [longitude,latitude]
    const data = {"title":title, "comment":comment, "location":String(location), "category":category};
    var register_url=SERVER_PATH+"interventions";
    fetch(register_url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "auth_token":  localStorage.getItem("auth-token")
        },
    
        cache: 'no-cache',
        body: JSON.stringify(data)
    })
        .then((res) => res.json())
        .then(result => {
            if(result.status === 201){
                var msg = document.getElementById('mess');
                msg.style.display="block";
                msg.innerHTML = "Successfully added a new record"
                setInterval(function(){
                   msg.style.display="none"
                    
                },5000);
                // window.location.href = 'user_incidents.html';
            }
            else{
                var msg = document.getElementById('messages');
                msg.style.display="block";
                msg.innerHTML = "Title, description and location can not be empty"
                setInterval(function(){
                   msg.style.display="none"
                    
                },5000);
            }
            
        })
  
  }
 

      