/* Global Variables */
let d = new Date();
let cityName ="";
let feeling ="";
let maxtemp;
let mintemp;
let temp=10;
let des="";
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();
let path="";
let country ="us"; //it could be changed to any country that Openweathermap provide.

//Global varibles for entry holder

let new_date = document.querySelector('#date');
let new_temp =document.querySelector('#temp');
let new_des =document.querySelector('#description');
let new_content =document.querySelector('#content');
let new_highest_temp=document.querySelector('#highest_temp');
let new_lowest_temp=document.querySelector('#lowest_temp');
let new_name =document.querySelector('#name');



// Creat baseurl ( the webApi used to get weather info is openWeathermap.org)
const baseURL='https://api.openweathermap.org/data/2.5/weather?zip='; //base URL
const apiKey='&appid=63ecbb1220c674b7e8b42fec55d40a8b&units=metric'; //Api Key 

const zip =  document.getElementById('zip'); // get  the zip code entered by the user 
const feel =document.querySelector('#feelings'); // get user response entered by the user 

    document.getElementById('generate').addEventListener('click', weather);  // creat an event listener when user click on the generate button

function weather(e)
{
  
    getzip(baseURL,zip, apiKey) // get info through the zip code entered by the user
    .then(function(data){  //then function is used for chaining promises to use multiple functions 
        postData('/weather',{date: newDate, temperature:temp, ur:feeling});  // PoST 
        display()  //update UI function

        }
    )

}
4

const getzip = async (baseURL, zip, apiKey)=>{ //async allows the usage of await, try,and catch
     const path = baseURL + zip.value +','+ country +apiKey; // path is used to get the required infos

      const res = await fetch(path)
      try {
    
        const data = await res.json();
        cityName =data.name;
       temp =data.main.temp;
        feeling=feel.value;
        mintemp =data.main.temp_min;
        maxtemp = data.main.temp_max;
        des= data.weather[0].main;
        new_name.innerHTML=cityName;
        new_name.style.fontSize="38px";
        new_des.innerHTML=des;
        new_temp.style.fontSize="42px";
        new_highest_temp.innerHTML='<span for ="highest_temp"> The Highest: '+maxtemp+'°C</span>';
        new_lowest_temp.innerHTML='<span for ="lowest_temp"> The Lowest: '+mintemp+'°C</span>';
        return data;

      }  catch(error) {
        alert('Wrong zipcode pleas try again!')
        console.log("error", error);
    
      }
    
    }

    const postData = async ( url = '', data = {})=>{
          const response = await fetch(url, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          credentials: 'same-origin', // include, *same-origin, omit
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data), // body data type must match "Content-Type" header        
        });
      
          try {
            const newData = await response.json();
            //console.log(newData);
            return newData
          }catch(error) {
          console.log("error", error);
          
          }
      }
      
      
 const display = async()=>
{
    const request= await fetch('/all');
    try{
    const allData = await request.json();
    new_date.innerHTML='<span for="date"><strong>Date </strong> </span>'+allData.date;
    new_date.style.fontSize="22px";
    new_temp.innerHTML='<span for ="temp">'+allData.temperature+'°</span>';;
    new_content.innerHTML=allData.ur;
   
    changebk(des);
    console.log(allData);


/* // for hiding or viewing the content of the page 

    const zipdisplay= document.querySelector('#zip');
    //console.log(zipdisplay);
    const generatedipaly=document.querySelector('#generate');
    const feeldisplay =document.querySelector('#feelings');
    const label =document.querySelectorAll('label');
    const body =document.querySelector('body');
    //zipdisplay.style.display="none";
    //feeldisplay.style.display="none";
    //generatedipaly.style.display="none";


    label.forEach(l=>
    {
        l.style.display="none";

    });*/


}catch(error){
    console.log("error",error);
}

   
}


function changebk(des)  // Change the background based on weather description
{
    if (des ==="Clear")
    {
    document.body.style.backgroundImage= "url('clear.jpg')";
    //document.body.style.backgroundRepeat="no-repeat";
    //document.body.style.backgroundSize="100%";

    }

    else if (des==="Clouds")
    {
    document.body.style.backgroundImage= "url('cloudy.jpg')";
    document.body.style.backgroundRepeat="no-repeat";
    //document.body.style.backgroundSize="100%";

    }

   else if (des==="Rain")
    {
    document.body.style.backgroundImage= "url('rainy.jpg')";
    //document.body.style.backgroundRepeat="no-repeat";
    //document.body.style.backgroundSize="100%"; 

    }

    else if (des==="Snow")
    {
    document.body.style.backgroundImage= "url('snowy.jpg')";
    //document.body.style.backgroundRepeat="no-repeat";
    //document.body.style.backgroundSize="100%";

    }

    else if (des==="Mist")
    {
    document.body.style.backgroundImage= "url('mist.jpg')";
    //document.body.style.backgroundSize="100%"; 
   /// document.body.style.backgroundRepeat="no-repeat";
    }
   else if (des==="Haze")
    {
    document.body.style.backgroundImage= "url('haze.jpg')";
    //document.body.style.backgroundSize="100%"; 
   /// document.body.style.backgroundRepeat="no-repeat";


    }
}




