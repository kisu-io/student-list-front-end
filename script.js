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
    const ageQuery = searchBox2.value;
    const searchData = studentData.filter((e) => e.age == ageQuery);
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
    const nameQuery = searchBox1.value;
    const searchData = studentData.filter((e) => e.name === nameQuery);
    const searchValue = searchData.map((item) => {
        return `
        <a href="#"><li>Student: ${item.name};  Id: ${item.id};   Age: ${item.age};   Email: ${item.email}</li>
    `;
    });
    cardHTML.innerHTML = searchValue.join("");
};
searchButton1.addEventListener("click", handleSearchName);
