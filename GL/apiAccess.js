function Connect() {
    var xhr = new XMLHttpRequest();
    //created a http request
    xhr.open("GET", "http://localhost:8000/api/Backend/", false);
    //sets params and stuff
    xhr.setRequestHeader('Content-Type', 'application/xml');
    // super important! specifies what will be recieved
    xhr.send();
    
    rawDocument = xhr.responseText;
    
    var parsedData = parseRaw(rawDocument);
    return parsedData;
}
    
function parseRaw(unparsedData){
    //console.log(unparsedData); 
    //-----> should return everything in database
    
    var frontIndex = unparsedData.indexOf("{\"B");
    var lastIndex = unparsedData.lastIndexOf("/\"}") - 96;
    var arr = unparsedData.substr(frontIndex,lastIndex);
    //splits all the information into a neat substring in order to get the actual information.
    
    var parsedArray = arr.split("}, ");
    //breaks the really long string into an array of json-like strings. all strings are now missing a bracket at the end. ill add it with a for loop. the last element doesnt need a bracket 
    
    var preObjectArr = []; //create new array to copy complete jsonified strings into
    for (i = 0; i < parsedArray.length -1; i++){
      preObjectArr[i] = parsedArray[i] + "}";
      // adds the bracket to all of the elements except the last one which didnt need one
    }
    preObjectArr[parsedArray.length -1] = parsedArray[parsedArray.length -1];
    
    //since the last element didnt need a bracket it didnt go through the for loop. But it still needed to be added to the new, copied array
    
    //console.log(preObjectArr[4]);
    //-----> change the index to view all of the json elements in the array. This was used to make sure the format was correct.
    
    //now i need to use another for loop and turn all of the json strings in the aray into objects. 
    
    var Artsts = [];
    //this array will hold the artist objects
    
    for(i = 0; i < preObjectArr.length; i++){
       // console.log(preObjectArr[i]);
        //good statement for debugging
        Artsts[i] = JSON.parse(preObjectArr[i]);
    }
    
    return Artsts; 
    //returns the array of artists
}

function getName(){
    var Info = Connect();
    var Name = [];
    
    for(i = 0; i < Info.length; i++){
        Name[i] = Info[i].Name;
    }
    return Name;
}

function getBio(){
    var Info = Connect();
    var Bio = [];
    
    for(i = 0; i < Info.length; i++){
        Bio[i] = Info[i].Bio;
    }
    return Bio;
}

function getID(){
    var Info = Connect();
    var ID = [];
    
    for(i = 0; i < Info.length; i++){
        ID[i] = Info[i].id;
    }
    return ID;
}

function getURI(){
    var Info = Connect();
    var URI = [];
    
    for(i = 0; i < Info.length; i++){
        URI[i] = Info[i].resource_uri;
    }
    return URI;
}