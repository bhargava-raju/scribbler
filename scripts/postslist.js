

var deleteBtn = document.getElementsByClassName('deleteBlog');
var selectedPostId = 0; //Required to the pass the id of the post selected 

var popUpAlter = document.getElementById('modalPopUp');

deleteBtn[0].onclick = function () {
    popUpAlter.style.display = "block";
    selectedPostId = 0;
}

deleteBtn[1].onclick = function () {
    popUpAlter.style.display = "block";
    selectedPostId = 1;
}

deleteBtn[2].onclick = function () {
    popUpAlter.style.display = "block";
    selectedPostId = 2;
}

deleteBtn[3].onclick = function () {
    popUpAlter.style.display = "block";
    selectedPostId = 3;
}

deleteBtn[4].onclick = function () {
    popUpAlter.style.display = "block";
    selectedPostId = 4;
}
var closeBtn = document.getElementById('noClose');

closeBtn.onclick = function () {
    popUpAlter.style.display = "none";
}

var deleteConfirmBtn = document.getElementById('yesDelete');

//Function to hide the selected as part of deleting it.
deleteConfirmBtn.onclick = function () {
    var selectedPost = document.getElementsByClassName('post');
    selectedPost[selectedPostId].style.display = "none";
    popUpAlter.style.display = "none";
}