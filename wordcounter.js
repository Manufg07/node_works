const string = "This section mainly explains how the AElf Blockchain starts from the initial nodes, and gradually replaces the initial nodes with true production nodes through elections, thus completing the complete process of AElf Blockchain startup."
let wordfrequency={}
let str1=string.replace(/[^a-zA-Z ]/g, "")
let words = str1.split(" ") 
console.log(words)
for(let value of words){
    if(wordfrequency[value]){
        wordfrequency[value]++;
    }else{
        wordfrequency[value]=1;
    }
}
console.log(wordfrequency);