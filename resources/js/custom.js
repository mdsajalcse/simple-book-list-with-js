


document.getElementById('add-btn').addEventListener('click',function(e){
    e.preventDefault();

    const studentName=document.getElementById('stdname');
    const departMent=document.getElementById('department');
    const bookName=document.getElementById('bookname');
    const author=document.getElementById('author');
    const bookList=document.getElementById('book-list');

    if(studentName.value=='' && departMent.value=='' && bookName.value=='' && author.value==''){
        alert("please input some values");
    }
    else{
//   creating row
    newRow=document.createElement('tr');

 //creating new student  
    const newStudentName=document.createElement('th');
    newStudentName.innerHTML=studentName.value;
    newRow.appendChild(newStudentName);

    //creating department name
    const newDepartmentName=document.createElement('th');
    newDepartmentName.innerHTML=departMent.value;
    newRow.appendChild(newDepartmentName);
    //creating book name
    const newBookName=document.createElement('th');
    newBookName.innerHTML=bookName.value;
    newRow.appendChild(newBookName);

    //creating author name
    const newAuthorName=document.createElement('th');
    newAuthorName.innerHTML=author.value;
    newRow.appendChild(newAuthorName);

    bookList.appendChild(newRow);
   
    }


  //  refresh self input

  studentName.value="";
  departMent.value=="";
  bookName.value==" ";
  author.value=="";


    

    

    


})