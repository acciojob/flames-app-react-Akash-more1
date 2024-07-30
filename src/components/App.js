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

        if(input1==="" || input2===""){
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
            if(map2[char]=== 0){
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
            if(map1[char]=== 0){
                delete map1[char];
            }
        }
        else{
            remaining2.push(char);
        }
       }
        
       
       const remainingLength = remaining1.length + remaining2.length;
        const leth = remainingLength % 6;
        // console.log(remainingLength);
        const relationshipStatuses = [
            "Siblings",
            "Friends",
            "Love",
            "Affection",
            "Marriage",
            "Enemy"
        ];
        setResult(relationshipStatuses[leth]);
    }

    const clear = ()=>{
        // console.log("akash");
        // let in1=document.getElementById("input1");
        // let in2=document.getElementById("input2");
        // in1.value="";
        // in2.value="";
         setInput1("");
         setInput2("");
        setResult("");
    }


        return(
            <div id="main">
               <input data-testid="input1" 
                name="name1"
                value={input1}
                placeholder="Enter first name"
                onChange={handleInput1}/>

               <input data-testid="input2" 
                name="name2"
                value={input2}
                placeholder="Enter second name"
                onChange={handleInput2}/>

               <button data-testid="calculate_relationship" onClick={relCalulate}>Calculate Relationship Future</button>
               <button data-testid="clear" onClick={clear}>Clear</button>
               <h3 data-testid="answer">{result}</h3>
            </div>
        )
    
}


export default App;
