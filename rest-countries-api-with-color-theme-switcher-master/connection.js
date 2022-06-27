
const connection = async url => {
    try {
        const res = await fetch(`https://restcountries.com/v3.1/${url}`);
        const data = await res.json();
        return data
    
    } catch (error) {
    
        return error;
    }
}

