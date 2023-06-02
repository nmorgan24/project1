const $searchForm = $("form");


$searchForm.on("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const card = encodeURIComponent(formData.get("card"));
    console.log(card);
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${card}`
    console.log(url);
    const $imageContainer = $(".imageContainer");
    const $SearchKey = $(".SearchKey");
      fetch(url)
        .then(response => {
            console.log(response);
            return response.json();
        })
        .then(data => {
            console.log(data.data[0].card_images[0].image_url);
            $imageContainer.html(
                `
                <img src = ${data.data[0].card_images[0].image_url_small} alt = ${data.data[0].name}
        
                
                <div>
                    <b>Yu-Gi-Oh Card&nbsp;</b> 
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
                   <b>Attribute:&nbsp;</b> ${data.data[0].attribute}
                </div>
            
            `) 

                  
        })

})