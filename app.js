const fileInput = document.getElementById('file-input');
const img = document.getElementById('img');
const form = document.getElementById('btn');

//adding images file
fileInput.addEventListener('change', (e) => {
    // console.log(e);
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener('load', () => {
        let url = reader.result;
        let link = document.querySelector("a");
        link.href = url;
        link.download = file.name;
        // console.log(link.download);
        localStorage.setItem('web-images', url);
        // img.src=url;
        // const img=new Image();
        // img.src=url;
        // document.body.appendChild(img);
        //document.querySelector('#preview').setAttribute("src",url);
        let mainURL = localStorage.getItem('web-images');
        img.src = mainURL;
    })
});

//submit and saving name in local storage
form.addEventListener('click', () => {
    let name = document.getElementById('name').value;
    // console.log(name);
    localStorage.setItem('name', name);
    let getName = localStorage.getItem('name');
    // console.log(getName)
    if (getName != "undefined" || name != "null") {
        alert(`Hello ${getName}`);
    }
    // if (getName == "null" || getName == "undefined") {
    //     alert(`The name field is Required !!!`);
    // }
    document.getElementById('name').value = "";

});







































// download.addEventListener('click', ()=>{
//     let file = fileInput.files[0];
//     console.log(file);
//     const reader = new FileReader();

//     reader.readAsDataURL(file);

//     reader.addEventListener('load', () => {
//         let url = reader.result;
//         // console.log(url);
//         let link=document.querySelector("a");
//         link.href=url;
//         link.download=file.name;
//         console.log(link.download);
//     })
// });
// function downloadFile() {
//     const url = localStorage.getItem('web-images');
//     // console.log(url);
//     let win = window.open();
//     win.document.write('<iframe src="' + url + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>')
// }
