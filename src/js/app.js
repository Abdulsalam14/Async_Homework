let datas = document.getElementById('datas');
let body=document.getElementById('body')

let gif=document.getElementById('giv')

async function GetData() {
    let movie=await prompt("Movie Name");
    let content='';
    try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=ddee1dae&s=${movie}&plot=full`);
        let data = await response.json();
        if (data.Error) {
            throw new Error(data.Error);
        }
        setTimeout(()=>{
            data.Search.forEach(e => {
                content += `<div class="data">
                <img src=${e.Poster} alt='movie'>
                <h2>${e.Title}</h2>
                <h4>Year : ${e.Year}</h4>
                <h4>Type : ${e.Type}</h4> 
                </div>`
            });
            datas.innerHTML = content;
            gif.style.display='none'
        },2000)
    }
    catch (error) {
        gif.style.display='none'
        console.log(error)
        body.innerHTML=`<h1 style='margin-top:250px'>${error}<h1>`

    }
}

GetData();