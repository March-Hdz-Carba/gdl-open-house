
console.log("restaurants", restaurants)

// Searching for the type of Restaurant
const typeRestaurants = ( data, nameType ) => {
    let typeRest = data
    .filter( obj => obj.type[0] === nameType || obj.type[1] === nameType );
    return typeRest
  };

//let filter;
// const select = () => {
//     document.getElementById("printType").innerHTML = '';
//     const type = document.getElementById("selectRestaurant").value;
//     console.log(type)
//     let filter = typeRestaurants(restaurants, type)
//     console.log(filter)
//     //return filter
//     filter.map(type => {
//         type;
//         const printTypes = `
//         <section>
//         <h4> ${type.title} </h4>
//         <h6> ${type.ubication}</h6>
//         <button >
//         <img class ="buttonImg" src="${type.img}">
//         </button>
//         </section>
//         `;
//         document.getElementById("printType").innerHTML += printTypes;
//     })
    
// }

// document.getElementById('buttonType').addEventListener('click', select)

//let filter;
const select = () => {
    document.getElementById("galleryPrint").innerHTML = '';
    const type = document.getElementById("selectRestaurant").value;
    console.log(type)
    let filter = typeRestaurants(restaurants, type)
    console.log(filter)
    //return filter
    filter.map(type => {
        type;
        const printTypes = `
        <div class="mu-single-gallery col-md-4">
        <div class="mu-single-gallery-item">
            <figure class="mu-single-gallery-img">
              <a class="mu-imglink" target="_blank" href="${type.page}">
              <img alt="img" src="${type.img}">
               <div class="mu-single-gallery-info">
                  <img class="mu-view-btn" src="assets/img/plus.png" alt="plus icon img">
              </div> 
            </a>
            </figure>
            <h4 class="titleType"> ${type.title} </h4>
            <h6 class="titleUbication"> ${type.ubication}</h6>
          </div>
    </div>
        `;
        document.getElementById("galleryPrint").innerHTML += printTypes;
    })
    
}

document.getElementById('buttonType').addEventListener('click', select)


