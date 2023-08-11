const accesskey = "KdjqVsv_ZTz475RzM-2PVAoZ4P5caUoWD8uLGtR1uYU"
const SearchForm = document.getElementById("search-form");
const SearchBox = document.getElementById("search-box");
const SearchResult = document.getElementById("search-result");
const ShowMoreButton = document.getElementById("show-more-button");
let keyword="";
let page = 1;

async function searchImages(){
    keyword = SearchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();

    if(page === 1){
        SearchResult.innerHTML = "";
    }
    const results = data.results;
    results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.appendChild(image);
    SearchResult.appendChild(imageLink);

    })
    ShowMoreButton.style.display = "block";
}
SearchForm.addEventListener("submit", (e) =>{
e.preventDefault();
page = 1;
searchImages();

})
ShowMoreButton.addEventListener("click",() =>{
    page++;
    searchImages();
});











