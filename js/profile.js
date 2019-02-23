var data_url=SERVER_PATH+"profile";
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
        document.getElementById('no_of_interventions_rejected').innerHTML = result.profile['no_of_interventions_rejected']
        document.getElementById('no_of_interventions_resolved').innerHTML = result.profile['no_of_interventions_resolved']
        document.getElementById('no_of_interventions_under_investigation').innerHTML = result.profile['no_of_interventions_under_investigation']
        document.getElementById('no_of_redflags_rejected').innerHTML = result.profile['no_of_redflags_rejected']
        document.getElementById('no_of_redflags_resolved').innerHTML = result.profile['no_of_redflags_resolved']
        document.getElementById('no_of_redflags_under_investigation').innerHTML = result.profile['no_of_redflags_under_investigation']
    })


