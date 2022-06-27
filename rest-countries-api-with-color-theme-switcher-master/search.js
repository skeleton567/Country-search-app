const input = document.querySelector(".search");
const btn = document.querySelector("#btn");
const region = document.querySelector("select");
const template = document.querySelector("[country-template]");
const container = document.querySelector("[country-container]");
const filter = document.querySelector("#select");


    input.addEventListener("input", e =>{
        let value = e.target.value.toLowerCase();
        countries.forEach(country =>{

            if(filter.value){
                let isVisible = country.ofName.toLowerCase().includes(value) || country.name.toLowerCase().includes(value) 
                || country.capital?.toLowerCase().includes(value) || country.region.toLowerCase().includes(value);
                
                if(country.region.toLowerCase() === filter.value.toLowerCase()){
                    country.element.classList.toggle("hide", !isVisible);

                }
                

            } else {
                let isVisible = country.ofName.toLowerCase().includes(value) || country.name.toLowerCase().includes(value) 
                || country.capital?.toLowerCase().includes(value) || country.region.toLowerCase().includes(value);

                country.element.classList.toggle("hide", !isVisible);
            }


            


        })
    })
    

    filter.addEventListener("change", e =>{
        let value = e.target.value.toLowerCase();
        
        countries.forEach(country =>{
            let isVisible = country.region.toLowerCase().includes(value);
            
            country.element.classList.toggle("hide", !isVisible);

        })
    })



    