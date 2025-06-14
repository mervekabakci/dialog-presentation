//dialog penceresini Kapatır
function closeBasicDialog(e){
    e.preventDefault();
    document.querySelector(".basicDialog").close();
}
//dialog penceresını acar
function showBasicDialog(e){
    e.preventDefault();
    console.log("dialog ac");
    document.querySelector(".basicDialog").show();
}
//dialog ac kapat tetikleyici butonlar
openModal.addEventListener("click", showBasicDialog);
closeModal.addEventListener("click", closeBasicDialog);


//Çoklu kullanım
const dialogs = document.querySelectorAll(".dialog");
const dialogButtons = document.querySelectorAll('.openDialogButton');
const closeDialogButtons = document.querySelectorAll('.closeDialog');
const body = document.querySelector("body");
const createDiv = document.createElement('div');

function handleClick(e){
    e.preventDefault();
    const nextDialog = this.nextElementSibling;
    nextDialog.show();

    body.style.overflow = "hidden";
     
    body.append(createDiv);
    createDiv.classList.add("dialogOverlay");
}

for(const dialogButton of dialogButtons){
    dialogButton.addEventListener("click", handleClick);
}

function handleClickClose(e){
    e.preventDefault();
    this.parentElement.close();
    createDiv.remove();
    body.style.overflow = "auto";
}

for(const closeDialog of closeDialogButtons){
    closeDialog.addEventListener("click", handleClickClose);
}
