document.getElementById("searchButton").addEventListener('click',()=>{
    const query=document.getElementById("searchQuery").value;
    const API_key="AIzaSyCT4DHbgW2sPdoEFuMWCaGmDbunNPcof6w";
    const cx="31e690420682c4a92";
    if(!query){
        alert("enter a query");
    }
    const url=`https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_key}&cx=${cx}&searchType=image`;
    fetch(url)
    .then(response=>response.json())
    .then(data=>displayResults(data))
    .catch(error=>console.log("error:",error));
    
});
function displayResults(data){
    const resultscontainer=document.getElementById("results");
    resultscontainer.innerHTML='';
    if(data.items){
        data.items.forEach(item=>{

        const result=document.createElement("div");
        const imgElement=document.createElement("img");
        imgElement.src=item.link;
        imgElement.alt=item.title;
        imgElement.style.width="200px";

            result.innerHTML=`<h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
            <p>${item.snippet}</p>`;
            resultscontainer.appendChild(result);
            resultscontainer.appendChild(imgElement)
        });
    }
    else{
        resultscontainer.innerHTML="<p>No results found.</p>"
    }
}
