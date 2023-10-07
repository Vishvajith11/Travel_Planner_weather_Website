let weather = {
    "apikey": "ENTER YOUR API KEY",
    fetchWeather : function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apikey)
        .then((Response) => Response.json())
        .then((data) => this.displayWeather(data));
    },


    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        const weatherContainer = document.querySelector(".weather");

        // Get the box element for the current weather and retrieve the color class
        

    


        
    const locationContainer = document.getElementById("locationContainer");
    // Remove any existing avoid or enjoy elements
    const existingAvoidElement = weatherContainer.querySelector(".avoid");
    const existingEnjoyElement = weatherContainer.querySelector(".accept");
    const existingdetailsElement = weatherContainer.querySelector(".details");
    const existingboxElement = weatherContainer.querySelector(".box");
    if (existingAvoidElement) {
        existingAvoidElement.remove();
    }
    if (existingEnjoyElement) {
        existingEnjoyElement.remove();
    }
    if (existingdetailsElement) {
        existingdetailsElement.remove();
    }
    if (existingboxElement) {
        existingboxElement.remove();
    }

    

        if (temp > 35) {

            
            const avoidElement = document.createElement("p");
            avoidElement.classList.add("avoid");
            avoidElement.innerText = "THE TEMPERATURE OF THE PLACE IS REALLY HOT";
            weatherContainer.appendChild(avoidElement);

            
        }
        else{

            
            const acceptElement = document.createElement("p");
            acceptElement.classList.add("accept");
            acceptElement.innerText = "THE TEMPERATURE IS NOT MUCH TO BOTHER!";
            weatherContainer.appendChild(acceptElement);
        }





        

        document.querySelector(".city").innerText = "Weather in " + name;


        const iconDetails = {
            
            "01d": { src: ".01d.png", details: "Your Destination Has A Clear Sky In The Day...No RainFall Or Harsh Weather...",boxClass:"green",boxText:"Enjoy Your Trip" },
            "02d": { src: ".02d.png", details: "Just A Few Clouds To Be Present Over Your Head At Your Destination...Clear Waeather And Good To Go..." ,boxClass:"green",boxText:"Enjoy Your Trip" },
            "03d": { src: ".03d.png", details: "Just Few Scattered Clouds To be Present Over Your Head...Not Much Chances Of Rainfall...good to Go...",boxClass:"green",boxText:"Enjoy Your Trip"  },
            // Add more mappings as needed
            "04d": { src: ".04d.png", details: "Scatttered Clouds To Be Expected All Over Your Head...Very Less Chance Of Getting Rain...",boxClass:"green",boxText:"Enjoy Your Trip" },
            "09d": { src: ".09d.png", details: "Showers Of Rain Is Expected At Your Destination...If You Are A Rain Shower Lover...Don't Miss This Oppurtunity to Shower in Rain In Your Journey",boxClass:"yellow",boxText:"Plan Accordingly" },
            "10d": { src: ".10d.png", details: "Rain Is Expected To Arrive At Your Destination...If Wanna Enjoy Light Rain Definitely Have This Journey...Don't Forget To Carry An Umbrella...",boxClass:"yellow",boxText:"Plan Accordingly"},
            "11d": { src: ".11d.png", details:"ThunderStorms Is Expected At Your Destination...Not A Good Sign...",boxClass:"yellow",boxText:"Plan Accordingly"},
            "13d": { src: ".13d.png", details:"Snowy All Over...Perfect Trip To Enjoy in Snow...",boxClass:"green",boxText:"Enjoy Your Trip"},
            "50d": { src: ".50d.png", details:"Mist Covered Your Destination...Better to Avoid Going By Road Since It Could Be Dangerous to Drive...",boxClass:"red",boxText:"Don't Go"},
            

            "01n": { src: ".01d.png", details: " !!!NIGHT!!!Your Destination Has A Clear Sky In The Day...No RainFall Or Harsh Weather...Enjoy Your Trip...",boxClass:"green",boxText:"Enjoy Your Trip" },
            "02n": { src: ".02d.png", details: " !!!NIGHT!!! Just A Few Clouds To Be Present Over Your Head At Your Destination...Clear Waeather And Good To Go...Enjoy Your Trip...",boxClass:"green",boxText:"Enjoy Your Trip",boxClass:"yellow",boxText:"Plan Accordingly"  },
            "03n": { src: ".03d.png", details: " !!!NIGHT!!! Just Few Scattered Clouds To be Present Over Your Head...Not Much Chances Of Rainfall...good to Go...Enjoy Your Trip...",boxClass:"green",boxText:"Enjoy Your Trip" },
            // Add more mappings as needed
            "04n": { src: ".04d.png", details: " !!!NIGHT!!! Scatttered Clouds To Be Expected All Over Your Head...Very Less Chance Of Getting Rain...",boxClass:"green",boxText:"Enjoy Your Trip" },
            "09n": { src: ".09d.png", details: " !!!NIGHT!!! Showers Of Rain Is Expected At Your Destination...If You Are A Rain Shower Lover...Don't Miss This Oppurtunity to Shower in Rain In Your Journey",boxClass:"yellow",boxText:"Plan Accordingly"},
            "10n": { src: ".10d.png", details: " !!!NIGHT!!! Rain Is Expected To Arrive At Your Destination...If Wanna Enjoy Light Definitely Have This Journey...Don't Forget To Carry An Umbrella...",boxClass:"yellow",boxText:"Plan Accordingly"},
            "11n": { src: ".11d.png", details:" !!!NIGHT!!! ThunderStorms Is Expected At Your Destination...Not A Good Sign...",boxClass:"yellow",boxText:"Plan Accordingly"},
            "13n": { src: ".13d.png", details:" !!!NIGHT!!! Snowy All Over...Perfect Trip To Enjoy in Snow...",boxClass:"green",boxText:"Enjoy Your Trip"},
            "50n": { src: ".50d.png", details:"!!!NIGHT!!! Mist Covered Your Destination...Better to Avoid Is Going By Road Since It Could Be Dangerous to Drive...",boxClass:"red",boxText:"Don't Go"},
            
        };
    
        const iconElement = document.querySelector(".icon");
        if (icon in iconDetails) {
            iconElement.src = iconDetails[icon].src;
    
            const detailsElement = document.createElement("p");
            detailsElement.classList.add("details");
            detailsElement.innerText = iconDetails[icon].details;
            weatherContainer.appendChild(detailsElement);

            const boxElement = document.createElement("div");
            boxElement.classList.add("box", iconDetails[icon].boxClass);
            boxElement.innerText = iconDetails[icon].boxText;
            weatherContainer.appendChild(boxElement);
    
        } else {
            // Default case
            iconElement.src = "default.png";
        }



        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage = `https://images.pexels.com/photos/531767/pexels-photo-531767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1${name}')`
    },
    

    




    // ...

    search: function() {
        const searchbar = document.querySelector(".searchbar");
        const location = searchbar.value.trim();
        const locations = searchbar.value.split(",");
      
        if (location === "") {
          return;
        }
      
        const locationContainer = document.getElementById("locationContainer");
        const locationBox = document.createElement("div");
        locationBox.classList.add("location-box");
        locationBox.innerText = location;
      
        this.fetchWeather(location);
      
        // Get the box element that represents the weather condition
        const boxElement = document.querySelector(".weather .box");
        const colorClass = boxElement.classList[1];
      
        // Set the background color and text color of the location box based on the color class
        locationBox.style.backgroundColor = this.getColorValue(colorClass, "background");
        locationBox.style.color = this.getColorValue(colorClass, "text");
      
        // Create a new table row
        const tableRow = document.createElement("tr");
      
        // Create a table cell for the location
        const locationCell = document.createElement("td");
        locationCell.innerText = location;
      
        // Set the background color and text color of the table cell based on the color class
        locationCell.style.backgroundColor = this.getColorValue(colorClass, "background");
        locationCell.style.color = this.getColorValue(colorClass, "text");
      
        // Append the location cell to the table row
        tableRow.appendChild(locationCell);
      
        // Append the table row to the table body
        const tableBody = document.querySelector("tbody");
        tableBody.appendChild(tableRow);
      
        // Append the location box to the location container
        locationContainer.appendChild(locationBox);

        
       

        const locationList = document.getElementById("locationList");
        locationList.innerHTML = ""; // Clear the previous list

        locations.forEach(location => {
        const locationItem = document.createElement("li");
        locationItem.innerText = location.trim();
        locationList.appendChild(locationItem);
  });

  // Fetch weather for the last location
  const lastLocation = locations[locations.length - 1];
  this.fetchWeather(lastLocation.trim());
      }
      
      
  


};


document.querySelector(".search button").addEventListener("click", function() {
    weather.search();
});

document.querySelector(".searchbar").addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("coimbatore");


function cloneContent() {
    // Get the original element
    const originalElement = document.getElementById('original');
    
    // Clone the original element
    const clone = originalElement.cloneNode(true);
    
    // Append the clone to the clone container
    const cloneContainer = document.getElementById('cloneContainer');
    cloneContainer.appendChild(clone);
  }
  
