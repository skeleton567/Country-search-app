
const connection = async url => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/${url}`);
        const data = await res.json();
        return data
    
    } catch (error) {
    
        return error;
    }
}

let countries = [];

connection("all")
    .then( data =>{
        countries = data.map( country => {
                
            
            let node = template.content.cloneNode(true).children[0]
            let flag = country.flags.png;
            let name = country.name.official;
            let casName = country.name.common;
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

            return { ofName: name, name: casName, population: population, capital: capital, region:region, element: node};
        })
    })
    