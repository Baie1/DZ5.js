function add_item (){
    let item = document.getElementById("box");
    let list_item = document.getElementById("list_item");
    if (item.value != "") {
        let make_li = document.createElement("LI");
        make_it.appendChild(make_li);
        item.value = "";
        make_li.onclick = function () {
            this.parentNode.removeChild(this);
        };
    } else {
        alert("добавьте задачу!");
    }

}