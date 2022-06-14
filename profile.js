const auth_header = { //header + api key, in reality, please secure this
    "Authorization" : "Bearer keyWsVnBWiVw0fLAy"
}

$(function (){
    $.ajax({
        type: 'GET',
        url: 'https://api.airtable.com/v0/appPucj1FvmbK3LL4/User?maxRecords=1',
        headers: auth_header,
        success: function(data){
            //this is bad practice, but for the sake of learning,
            //we use only the first data in records, since only my profile is needed
            document.getElementById('profile-name').innerHTML = data.records[0].fields.Name
        }
    });
});

function filterAboutByID(array, id){
    for (let i = 0; i < array.length; i++){
        if (array[i].fields.User[0] == id){
            return array[i].fields.Description
        }
    }
    return null
}

$(function (){
    $.ajax({
        type: 'GET',
        url: 'https://api.airtable.com/v0/appPucj1FvmbK3LL4/About?filterByFormula=NOT%28%7BAbout%20ID%7D%20%3D%20%27%27%29',
        //^ get About where About id != ''
        headers: auth_header,
        success: function(data){
            //console.log('success', data)
            //efficiency second, this is just to familiarize me
            var about = filterAboutByID(data.records, "rec0edkqSx4BJUoXR") //for now still hardcoded my own id here
            document.getElementById('about-description').innerHTML = about
        }
    });
});

$(function (){
    $.ajax({
        type: 'GET',
        url: 'https://api.airtable.com/v0/appPucj1FvmbK3LL4/Experience?filterByFormula=NOT%28%7BExperience%20ID%7D%20%3D%20%27%27%29',
        //^ get About where About id != ''
        headers: auth_header,
        success: function(data){
            console.log('success', data)
        }
    });
});