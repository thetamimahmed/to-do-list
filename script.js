let count = 1;
document.getElementById('add-btn').addEventListener('click', function(){
    let inputField = document.getElementById('input-field');
    const tableBody = document.getElementById('table-body');
   
    // condition input 
    if(inputField.value == ''){
        return alert('Please Input A String/Word Value');
    }

    //create element
    const createTr = document.createElement('tr');
    createTr.innerHTML  = `
    <tr>
        <th>${count++}</th>
        <td>${inputField.value}</td>
        <td>
            <button class="btn btn-danger delete-btn">Delete</button>
            <button class="btn btn-success done-btn">Done</button>
        </td>
    </tr>
  `;
    
    //add created element in parent
    tableBody.appendChild(createTr);

    //clear input field
    inputField.value = '';

    //delete butoon
    const deleteBtn = document.getElementsByClassName('delete-btn');
    for(const btn of deleteBtn){
        btn.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.display = 'none';
        })
    }
    // done button 
    const doneBtn = document.getElementsByClassName('done-btn');
    for(const btn of doneBtn){
        btn.addEventListener('click', function(e){
            e.target.parentNode.parentNode.style.textDecoration = 'line-through';
        })
    }
    
})

//reset button
document.getElementById('reset-btn').addEventListener('click', function(){
    const tableBody = document.getElementById('table-body');
    tableBody.style.display = 'none';
})
