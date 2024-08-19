// function addNumbers(numberA, numberB){
//     return new Promise((resolve, reject) => {
//         let result = numberA + numberB;
//         if (result > 0) {
//             resolve(result);
//         } else{
//             reject('o resultado não vale')
//         }
//     })
// }
// console.log(addNumbers(2,5)


// function simulação() {
//     return new Promise((resolve, reject) => {
//         const sucesso = Math.random() < 0.5;

//         setTimeout(() =>{
//             if (sucesso){
//                 resolve("dasdos concluidos gayzão");
//             } else{
//                 reject("erro")
//             }
//         }, 1000);
//     });
// }

// simulação()
// .then(resultado => {
//     console.log('resultado');
// })
// .catch(erro => {
//     console.error(erro);
// })
// .finally(() => {
//     console.log('conclued')
// })

// async function cafe() {
//     console.log('fezendo seu pedido');
//     const cafe = await prepararcafe();
//     console.log('café pronto:', cafe);
//      console.log('tomando café');
// }
// function prepararcafe() { 
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('café quente');
//         }, 2000);
//     });

// }

function upload() {
    const fileInput = document.getElementById("uploadInput");
    const progresso = document.getElementById('progresso')
    const su = new SmashUploader({ region: "eu-west-3", token: "Put your api key here" });

    progresso.hidden = false;

    su.upload({ files: [...fileInput.files] })
        .then(transfer => { 
            console.log("Transfer", transfer);
            progresso.value = 100;
         })
        .catch(error => { 
            console.log("Error", error);
            progresso.hidden = true;
         });

 su.on('progress', (event) => {
    const progressdata = event.data && event.data.progress;
    if (progressdata && progressdata.percent !== undefined) {
        progressElement.value = progressdata.element;
        console.log('progress:', progressdata.percent)
    } else {
        console.log('deu ruim')
    }
 })
}