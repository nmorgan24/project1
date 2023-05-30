const $searchForm = $("form");


$searchForm.on("submit", event => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const card = formData.get("card");
    const url = `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${card}`
    console.log(url);
    const $imageContainer = $(".imageContainer");
    const $SearchKey = $(".SearchKey");
      fetch(url)
        .then(response => {
            return response.json();
        })
        .then(data => {
            $imageContainer.html(
                `<img src=${data.image_url} alt=${data.name}>`
            );
            $imageContainer.html(`
                <div>
                    <b>name:&nbsp;</b> ${data.id}
                </div>

                <div>
                   <b>name:&nbsp;</b>  ${data.name}
                </div>

                <div>
                   <b>name:&nbsp;</b> ${data.type}
                </div>

                <div>
                   <b>name:&nbsp;</b> ${data.atk}
                </div>

                <div>
                   <b>name:&nbsp;</b> ${data.def}
                </div>

                <div>
                   <b>name:&nbsp;</b> ${data.level}
                </div>

                <div>
                   <b>name:&nbsp;</b> ${data.race}
                </div>

                <div>
                   <b>name:&nbsp;</b> ${data.attribute}
                </div>
            
            `) 

                  
        })

})