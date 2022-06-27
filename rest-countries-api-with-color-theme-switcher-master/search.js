const input = document.querySelector(".search");
const btn = document.querySelector("#btn");
const region = document.querySelector("select");
const template = document.querySelector("[country-template]");
const container = document.querySelector("[country-container]");


btn.addEventListener("click", e =>{
    
    if(input.value ){
        connection(`name/${input.value}`)
    .then( data =>{
        for(let country of data){
            let node = template.content.cloneNode(true).children[0]
            let flag = country.flags.png;
            let name = country.name.official;
            let population = country.population;
            let capital = country.capital[0];
            let region = country.region;

            
            cntPopulation.innetText = population;
            cntImg.src = flag;
            
            cntRegion.innetText = region;
            cntCapital.innetText = capital; 
            ctnName.innetText = name;
            container.appendChild(node);

        } 
    })
    } else if (region.value){
        connection(`region/${region.value}`)
        .then( data =>{
            for(let country of data){
                let node = template.content.cloneNode(true).children[0]
                let flag = country.flags.png;
                let name = country.name.official;
                let population = country.population;
                let capital = country.capital[0];
                let region = country.region;
    
                cntImg.src = flag;
                cntPopulation.innetText = population;
                cntRegion.innetText = region;
                cntCapital.innetText = capital; 
                ctnName.innetText = name;
                container.appendChild(node);
            }
        })
    } else {
        connection("all")
        .then( data =>{
            for(let country of data){
                
                console.log(data)
                let node = template.content.cloneNode(true).children[0]
                let flag = country.flags.png;
                let name = country.name.official;
                let population = country.population;
                let capital = country?.capital?.[0];
                let region = country.region;

                const cntImg = node.querySelector("#country-img");
                const cntPopulation = node.querySelector("#country-population");
                const cntRegion = node.querySelector("#country-region");
                const cntCapital= node.querySelector("#country-capital");
                const ctnName = node.querySelector("#country-name");
                

               
                cntPopulation.innerText = `Population: ${population}`;
                
                
                
                cntImg.src = flag;

                
                cntRegion.innerText = `Region: ${region}`;
                

                if(capital){
                    cntCapital.innerText = `Capital: ${capital}`;
                } else {
                    cntCapital.innerText = "Capital: None";
                }
                
                 
                ctnName.innerText = name;
                container.appendChild(node);
    
            }
        })
    }
    
})