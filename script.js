var selectedRow=null

function onFormSubmit(){
    var formData=readfromData();
    if(selectedRow==null)
       insertNewRecord(formData);
        else
        updateRecord(formData);
    resetForm();
}

function readfromData(){
    var formData={};
    formData['fullName']=document.getElementById("fullName").value;
    formData['empcode']=document.getElementById("empcode").value;
    formData['salary']=document.getElementById("salary").value;
    formData['city']=document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data){
    var table=document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
   cell1=newRow.insertCell(0);
   cell1.innerHTML=data.fullName;
   cell2=newRow.insertCell(1);
   cell2.innerHTML=data.empcode;
   cell3=newRow.insertCell(2);
   cell3.innerHTML=data.salary;
   cell4=newRow.insertCell(3);
   cell4.innerHTML=data.city;
   cell4=newRow.insertCell(4);
   cell4.innerHTML='<a onClick="onEdit(this);">Edit</a><a onclick="onDelete(this)">Delete</a>';

}

function resetForm(){
    document.getElementById("fullName").value="";
    document.getElementById("empcode").value="";
    document.getElementById("salary").value="";
    document.getElementById("city").value="";
    selectedRow=null;
}

function onEdit(td){
selectedRow=td.paremtElement.paremtElement;
document.getElementById("fullName").value=selectedRow.cells[0].innerHTML;
document.getElementById("empcode").value=selectedRow.cells[1].innerHTML;
document.getElementById("salary").value=selectedRow.cells[2].innerHTML;
document.getElementById("city").value=selectedRow.cells[3].innerHTML;

}

function updateRecord(formData){
selectedRow.cells[0].innerHTML=formData.fullName;
selectedRow.cells[1].innerHTML=formData.empcode;
selectedRow.cells[2].innerHTML=formData.salary;
selectedRow.cells[3].innerHTML=formData.city;
}

function onDelete(td){
if(confirm('Are you sure to delete this record?')){
    row=td.paremtElement.parentElement;
    document.getElementById("employeelist").deleteRow(row.rowIndex);
    resetForm();
}
}