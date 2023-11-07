'use strict'
// 1行目に記載している 'use strict' は削除しないでください

let clickTimes = 0;
function getInputInfo(){
    clickTimes ++;
    const getInfoArray = [];
    getInfoArray[0]= document.getElementById("locationname").value;
    getInfoArray[1]= document.getElementById("targetfish").value;
    getInfoArray[2]= document.getElementById("parkingcheck").value;
    
    const element = document.getElementById("resultdisplay");
    const resultArray = getDetailInfo(getInfoArray);
    let typeChange = "";
    for (const result of resultArray){
        typeChange += result.Number + "　　";
    }
    if(typeChange === ""){
        typeChange = "該当場所がありません。　残念 &#x1f62d"
    }
    element.innerHTML = typeChange;

    if (clickTimes % 5 === 0){
        document.getElementById("happy").innerHTML = "&#x1f3a3";
    }else{
        document.getElementById("happy").innerHTML ="";
    }

}
function getDetailInfo(input){
    const result = [];
    for (const array of fishInfo){
      if(input[0] === array.Location || input[0] === "all"){
        if(input[2] === array.Parking || input[2] === "all"){
            if(input[1] === "all"){
                result.push(array);
            }else{
                for(const fishname of array.Fish){
                  if(input[1] === fishname){
                    result.push(array);
                    break;
                  }
                }
            }
        }
      }
    }
    return result;
}
const searchButton = document.getElementById("searchStart");
searchButton.addEventListener("click", getInputInfo);
