import React, {Component, useState} from "react";
import '../styles/App.css';

const App =()=> {
    const [input1, setInput1] = useState(""); 
    const[input2, setInput2] = useState("");
    const[result, setResult] = useState("");

    const handleInput1= (e)=>{
        setInput1(e.target.value);
    }

    const handleInput2= (e)=>{
        setInput2(e.target.value);
    }

    const relCalulate= ()=>{

        if(input1=="" || input2==""){
            setResult("Please Enter valid input");
            return;
        }
       const map1={};

       const map2={};

       for(const char of input1){
        map1[char] = (map1[char] || 0) + 1;
       }

       for(const char of input2){
        map2[char] = (map2[char] || 0) + 1;
       }
    
       let remaining1= [];
       let remaining2 = [];

       for(const char of input1){
        if(map2[char]){
            map2[char]--;
            if(map2[char]== 0){
                delete map2[char];
            }
        }
        else{
            remaining1.push(char);
        }
       }

       for(const char of input2){
        if(map1[char]){
            map1[char]--;
            if(map1[char]== 0){
                delete map1[char];
            }
        }
        else{
            remaining2.push(char);
        }
       }
        
       
       setResult((remaining1.length+remaining2.length)%6);
        let leth =(remaining1.length+remaining2.length)%6;
       if(leth==0){
        setResult("Siblings");
       }
       else if(leth==1){
        setResult("Friends");
       }
       else if(leth==2){
        setResult("Love");
       }
       else if(leth==3){
        setResult("Affection");
       }
       else if(leth==4){
        setResult("Marriage");
       }
       else if(leth==5){
        setResult("Enemy");
       }

    }

    const clear = ()=>{

        let in1=document.getElementById("ik");
        let in2=document.getElementById("il");
        in1.value="";
        in2.value="";
         setInput1("");
         setInput2("");
        setResult("");
    }


        return(
            <div id="main">
               <input id="ik" onChange={handleInput1}/>
               <input id="il" onChange={handleInput2}/>
               <button id="in" onClick={relCalulate}>Calculate Relationship Future</button>
               <button id="io" onClick={clear}>Clear</button>
               <h3>{result}</h3>
            </div>
        )
    
}


export default App;
