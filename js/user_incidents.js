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
        if(result.status === 200){
            
            // alert(JSON.stringify(result))
            // alert(result.data.length);
      
           
                var i = 0;
                
                var data = '<table>'+
                                '<button id="modalBtn" class="button" onclick="addIncidentRecord()"> + Records</button>'+
                                 '<tr> <th>#</th><th>title</th><th>Comment</th><th>Category</th><th>Location</th><th>Image</th><th>Status</th><th>Created On</th><th>Actions</th></tr>';
                
                if(result.message != "There exists no Redflag"){
                    for(i=0; i < result.data.length; i++){
                        data +=  '<tr><td>'+String(i+1)+'</td><td>'+result.data[i]["title"]+'</td><td>'+result.data[i]["comment"]+'</td><td>'+result.data[i]["category"]+'</td><td>['+result.data[i]["location"]+']</td><td>'+result.data[i]["image"]+'</td><td>'+result.data[i]["status"]+'</td><td>'+result.data[i]["createdOn"]+'</td><td><button onclick="edit('+result.data[i]["incident_id"]+','+result.data[i]["createdby"]+')" id="'+result.data[i]["incident_id"]+'">Edit</button>  <button>Delete</button></td></tr>';
                    }
                    document.getElementById("incidents_table").innerHTML = data+"</table>";
                }else{
                    
                    document.getElementById("incidents_table").innerHTML = data +"<tr><td colspan='9'>There are no incidents yet!</td></tr></table>";
                }
               
            //    +
            //     
           
         

        }
        else{
            alert(alert(JSON.stringify(result)));
        }
        
    })







function getUrl(){
    // var photo = document.getElementById("image-file").files[0];
  
    
    var title = document.getElementById('title').value;
    var comment = document.getElementById('comment').value;
    var category = document.getElementById('category').value;
    var longitude = document.getElementById('longitude').value;
    var latitude = document.getElementById('latitude').value;
    
    var location = [longitude,latitude]
    const data = {"title":title, "comment":comment, "location":String(location), "category":category};
    
    // alert(JSON.stringify(data));
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
                window.location.href = 'user_incidents.html';
            }
            else{
                alert(JSON.stringify(result))
            }
            // alert(JSON.stringify(result))
            
        })
  
  }
 

      