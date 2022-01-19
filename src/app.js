import { getData } from "./getData.js";

const tableBody = document.querySelector("tbody");
const url = "https://jsonplaceholder.typicode.com/users";

const data = getData(
  url,
  (success) => {
    const users = JSON.parse(success);
    let tableData = "";
    users.forEach((user) => {
      tableData += `
      <tr>
        <th scope="row">${user.id}</th>
        <td>${user.name}</td>
        <td>${user.username}</td>
        <td>${user.email}</td>
        <td>${user.address.street}, ${user.address.suite}, ${user.address.city}</td>
        <td>${user.company.name}</td>
      </tr>`;
    });
    tableBody.innerHTML = tableData;
  },
  (error) => {
    console.log(error.message);
  }
);
