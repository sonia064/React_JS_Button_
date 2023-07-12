const domContainer = document.querySelector("#root");

const Increment = () => {
    const [counter, setCounter] = React.useState(0);
    
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightgreen',
       
      };

    const numberStyle = {
        color: 'green',
        fontSize: '54px',

        // other CSS properties
      };
      const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '30px',
        borderRadius: '10px',
        fontSize: '30px'
        // other CSS properties
      };
    return (
    <div style={containerStyle} >


       <h1 id="display" style={numberStyle}> { counter }</h1>
          <div>
             <button id="button" style={buttonStyle} onClick = {() => setCounter(counter + 1)}>Increment + </button>
          </div> 
    
    </div>
    );
};

ReactDOM.render(
    <div className="container">
<Increment />
<Increment />
<Increment />

</div>,
domContainer);



// let number =0;

// const button = document.querySelector("#button");
// const display = document.querySelector("#display");

// button.addEventListener("click", () => {
//     number++;
//     display.textContent = number;
// }
// );






// const myElement = (
//     <div>
//         <h1 id="display">0</h1>
//         <div>
//             <button id="button">Increment</button>
//         </div>
//     </div>    
// );

// ReactDOM.render(myElement, domContainer);