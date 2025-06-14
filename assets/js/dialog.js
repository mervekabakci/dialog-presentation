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
