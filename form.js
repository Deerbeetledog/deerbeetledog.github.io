function getForm(){
    let form = document.getElementById("form");
    let formData = new FormData(form);

    for (const [key, value] of formData){
        console.log(key);
        console.log(value);

        document.getElementById("t").innerHTML = value;
    }

    console.log("fiuwdsk");
}