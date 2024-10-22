window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApiUrl = 'https://azureresumefunctionget.azurewebsites.net/api/GetResumeCounter?code=-yGVF8nkJnkDyT6IjtlAYPzn8gDTv7cSJp3iSk8UzLgqAzFu9Gl9Kw%3D%3D'
const localfunctionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30; // Default count value in case of error
    fetch(functionApiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Website called function API.");
            count = data.count;
            document.getElementById("counter").innerText = count;
        })
        .catch(error => {
            console.log("Error fetching the visit count: ", error);
        });
    return count;
}
