async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const  dataContainer = document.getElementById('api-data');
    try {
        // Fetch the user data
        const response = await fetch(apiUrl);
        const users = await response.json();

        // Clear the loading message
        dataContainer.innerHTML = '';

        // Create a <ul> to hold the user list
        const userList = document.createElement('ul');

        // Loop through usera and add their names 
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
        // Append the list to the container
        dataContainer.appendChild(userList);
    } catch (error) {
        // Handle fetch errors
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data';
        console.error('Error fetching user data:', error);
    }
}
// Run after DOM is loaded
document.addEventListener('DOMContentLoaded', fetchUserData); 