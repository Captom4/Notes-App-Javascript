var list = [];

function toggle_note_area() {
    var btn_new = document.getElementById("btn_new_note");
    var form_new = document.getElementById("form_new_note");
    if (btn_new.className === "hidden") {
        btn_new.className = "";
        form_new.className = "hidden";
        console.log(form_new.children[0])
    } else {
        btn_new.className = "hidden";
        form_new.className = "";
    }
}


function add_note() {
    var note_text = document.getElementById("txt_note");
    // note = new Note(note_text.value);
    // list.push(note);

    var ul = document.getElementById("note_list");
    var li = document.createElement("li");
    // li.className = "note";
    li.appendChild(document.createTextNode(note_text.value));
    ul.appendChild(li)
}
