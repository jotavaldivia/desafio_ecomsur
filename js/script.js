
let getCountry = ()=>{
   let country = document.getElementById('search__input').value;
   let search_results = document.getElementById("search__results")
   let url = `https://restcountries.eu/rest/v2/name/${country}`

   if(country==""){
      alert("el campo está vacio, favor agregar nombre de un país")
   }else{
 
   fetch(url)
   .then((resp)=> resp.json())
   .then((newData)=>{
      
      
      search_results.innerHTML =  `
                <span class="search__results__span">Capital </span> <p>${newData[0].capital}<p><br>
                <span class="search__results__span">Bandera <p class="search__results__p"><img class="search__results__img" src="${newData[0].flag}" width="30%"/></p>
                <span class="search__results__span">Nombre Completo del País </span><p>${newData[0].altSpellings[2]}</p>
                <span class="search__results__span">Región </span><p>${newData[0].region}</p>
                <span class="search__results__span">Países Limístrofes </span><div id="search__code"></div>
                <span class="search__results__span">Lengua </span><p>${newData[0].languages[0].nativeName}</p>
                <span class="search__results__span">Nombre y Simbolo</span><p>${newData[0].currencies[0].name} :${newData[0].currencies[0].symbol} </p>
      
      
      `
      getCode(newData[0].borders);
      
   })
   .catch((e)=>{
      console.log(e); 
   })

   }


let getCode = (code)=>{
   code.forEach(element =>{
      let search_code= document.getElementById("search__code")
      let urlcode = `https://restcountries.eu/rest/v2/alpha?codes=${element}`
      fetch(urlcode)
      .then((resp)=> resp.json())
      .then((newDataCode)=>{
         console.log(newDataCode)
         search_code.innerHTML += `
         <p>${newDataCode[0].name}</p>
         `
         
      })
      .catch((e)=>{
         console.log(e); 
      })

});
}
}

