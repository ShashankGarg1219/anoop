// async function getData(sal){
//     let htmlcode = `<table border=1>`;
//     let apiURL = `http://localhost:5000/employee`;
//     let data = await fetch(apiURL)
//     let finalData = await data.json()
    // for(let i = 0; i <table finalData.length; i++){
    //   if(finalData[i].salary < sal)
    //    console.log(finalData[i])
    // }
//     finalData.map((item, index)=>{
//      if(item.salary < sal){
//       htmlcode += `<tr>
//            <td>${item.name}</td>
//            <td>${item.salary}</td>
//            </tr>`
//      }
//     })
//    htmlcode += `</table>`;
//    document.getElementById("empdata").innerHTML =htmlcode;
//    }



    ///==================[HTML SE DATA KO JAVASCRIPT ME BHEJNA=======]

    async function getapifetch() {
        let result = await fetch("http://localhost:5000/employee")
        let data = await result.json()
 for (let i = 0; i < data.length; i++) {
    if (data[i].salary < 200)
    console.log(data[i])
    }
}
// data.map ((item ,index)=>) {
//     if (item.salary < sal)
//     console.log(item)
// }
// }
