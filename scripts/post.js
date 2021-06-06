var titleConetnt = document.getElementById('postTitleNew');
var contentText = document.getElementById('postBody');
var editButton = document.getElementById('editButton');
var saveButton = document.getElementById('saveButton');
// edit and save the content
function editContent(){
    contentText.contentEditable="true";
    titleConetnt.contentEditable="true";
    contentText.style.border="1px solid red";
    titleConetnt.style.border="1px solid red";
    editButton.style.display="none";
    saveButton.style.display="block";
    contentText.focus();
}

function saveContent(){
    contentText.contentEditable="false";
    titleConetnt.contentEditable="false";
    contentText.style.border="none";
    titleConetnt.style.border="none";
    editButton.style.display="block";
    saveButton.style.display="none"; 
}