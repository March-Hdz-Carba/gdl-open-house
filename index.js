
console.log("restaurants", restaurants)

// Searching for the type of Restaurant
const typeRestaurants = ( data, nameType ) => {
    let typeRest = data
    .filter( obj => obj.type[0] === nameType || obj.type[1] === nameType );
    return typeRest
  };

//let filter;
const select = () => {
    document.getElementById("printType").innerHTML = '';
    const type = document.getElementById("selectRestaurant").value;
    console.log(type)
    let filter = typeRestaurants(restaurants, type)
    console.log(filter)
    //return filter
    filter.map(type => {
        type;
        const printTypes = `
        <section>
        <h4> ${type.title} </h4>
        <h6> ${type.ubication}</h6>
        <button >
        <img class ="buttonImg" src="${type.img}">
        </button>
        </section>
        `;
        document.getElementById("printType").innerHTML += printTypes;
    })
    
}

document.getElementById('buttonType').addEventListener('click', select)


