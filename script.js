const baseUrl = "http://localhost:5000/api";
const path = "/students"

const cardHTML = document.getElementById("card-group");

const fetchAsync = async () => {
    let url = baseUrl + path;
    let response = await fetch(url);
    studentData = await response.json();
    const cardOutput = studentData.map((item) => {
        return renderStudent(item);
    });
    cardHTML.innerHTML = cardOutput.join("");
}
fetchAsync();

function renderStudent(item) {
    return `
        <a href="#"><li>Student: ${item.name};  Id: ${item.id};   Age: ${item.age};   Email: ${item.email}</li>
    `;
};

const searchBox1 = document.getElementById("search-box1");
const searchButton1 = document.getElementById("search-btn1");
const handleSearchAge = (e) => {
    e.preventDefault(); 
    const ageQuery = searchBox1.value;
    console.log(ageQuery)
    const searchData = studentData.filter((e) => e.age == parseInt(ageQuery));
    console.log(searchData)
    const searchValue = searchData.map((item) => {
        return `
        <a href="#"><li>Student: ${item.name};  Id: ${item.id};   Age: ${item.age};   Email: ${item.email}</li>
    `;
    });
    cardHTML.innerHTML = searchValue.join("");
};
searchButton1.addEventListener("click", handleSearchAge);


const searchBox2 = document.getElementById("search-box2");
const searchButton2 = document.getElementById("search-btn2");
const handleSearchName = (e) => {
    e.preventDefault(); 
    const nameQuery = searchBox2.value;
    console.log(nameQuery)
    const searchData = studentData.filter((e) => e.name === nameQuery);
    console.log(searchData)
    const searchValue = searchData.map((item) => {
        return `
        <a href="#"><li>Student: ${item.name};  Id: ${item.id};   Age: ${item.age};   Email: ${item.email}</li>
    `;
    });
    cardHTML.innerHTML = searchValue.join("");
};
searchButton2.addEventListener("click", handleSearchName);
