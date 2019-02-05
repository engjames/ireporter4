var interventions_url=SERVER_PATH+"interventions";
fetch(interventions_url, {
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
            
            // alert(JSON.stringify(result.data))
            // // alert(result.message.length);
      
           
                var i = 0;
                
                var data = '<table border="1">'+
                                 '<tr> <th>#</th><th>user_id</th><th>title</th><th>Comment</th><th>Category</th><th>Location</th><th>Image</th><th>Status</th><th>Created On</th><th>Actions</th></tr>';
                
                if(result.data.length > 0){
                    for(i=0; i < result.data.length; i++){
                        data +=  '<tr><td>'+String(i+1)+'</td><td>'+result.data[i]["createdby"]+'</td><td>'+result.data[i]["title"]+'</td><td>'+result.data[i]["comment"]+'</td><td>'+result.data[i]["category"]+'</td><td>'+result.data[i]["location"]+'</td><td>'+result.data[i]["image"]+'</td><td>'+result.data[i]["status"]+'</td><td>'+result.data[i]["createdOn"]+'</td><td><button onclick="update_status('+result.data[i]["incident_id"]+', '+result.data[i]["user_id"]+')" id="'+result.data[i]["incident_id"]+'">Update status</button></td></tr>';
                    }
                    document.getElementById("intervention_table").innerHTML = data+"</table>";
                }else{
                    document.getElementById("intervention_table").innerHTML = data +"<tr><td colspan='9'>There are not red-flags yet!</td></tr></table>";
                }
               
            //    +
            //     
           
         

        }
        else{
            alert(alert(JSON.stringify(result)));
        }
        
    })
