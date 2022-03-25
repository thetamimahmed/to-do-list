let count = 1;
document.getElementById('add-btn').addEventListener('click', function(){
    const inputField = document.getElementById('input-field').value;
    const tableBody = document.getElementById('table-body');
    const createTr = document.createElement('tr');
    createTr.innerHTML  = `
    <tr>
        <th>${count++}</th>
        <td>${inputField}</td>
        <td>
            <button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-success done-btn">Done</button>
        </td>
    </tr>
  `;
    tableBody.appendChild(createTr);
})