const $searchForm = $("form");


$searchForm.on("submit", event => {
    event.preventDefault();
    //generate data from the target object
    const formData = new FormData(event.target);
    //get the value from the generated data where the name value is "card" (on the form)
    const card = encodeURIComponent(formData.get("card"));
    console.log(card);
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${card}`
    console.log(url);
    const $imageContainer = $(".imageContainer");
    const $SearchKey = $(".SearchKey");
   //  fetching data 
      fetch(url)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data.data[0].card_images[0].image_url);
            $imageContainer.html(
                ` 
                <div>    
                   <img src = ${data.data[0].card_images[0].image_url_small} alt = ${data.data[0].name}  
                    <b>&nbsp;</b> 
                </div>
               
                <div>
                   <b>ID:&nbsp;</b>  ${data.data[0].id}
                </div>
               
                <div>
                   <b>Name:&nbsp;</b>  ${data.data[0].name}
                </div>
                
                <div>
                   <b>Type:&nbsp;</b> ${data.data[0].type}
                </div>
                
                <div>
                   <b>ATK:&nbsp;</b> ${data.data[0].atk}
                </div>
                
                <div>
                   <b>DEF:&nbsp;</b> ${data.data[0].def}
                </div>
                
                <div>
                   <b>Level:&nbsp;</b> ${data.data[0].level}
                </div>
               
                <div>
                   <b>Race:&nbsp;</b> ${data.data[0].race}
                </div>
                
                <div>
                   <b>...Attribute:&nbsp;</b> ${data.data[0].attribute}
                </div>
            
            `) 

                  
        })
        
     

});

// ^^^^^^^^^^^^ notes ^^^^^^^^^^^^^^^^^
// //getting the images from the api
// // getting the data for the ("id")
// // getting the data for the ("name")
// // getting the data for the ("type")
// // getting the data for the ("atk")
// // getting the data for the ("def")
// // getting the data for the ("level")
// // getting the data for the ("race")
// // getting the data for the ("attribute")