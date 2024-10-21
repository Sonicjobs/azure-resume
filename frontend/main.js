window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30; // Default count value in case of error
    fetch(functionApi)
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
