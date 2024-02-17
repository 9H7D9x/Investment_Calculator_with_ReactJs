import React from 'react'

function UserInput  ({onChangeInput, userInput})  {
   console.log();
  return (
    <section id="user-input">
        <div className="input-group">
            <p>
                <label>Initial Investment</label>
                <input type="number" 
                       required
                       disabled={false}
                       value={userInput.initialInvestment}
                       onChange={(event)=>onChangeInput("Initial Investment" , event.target.value)}></input>
            </p>
            <p>
                <label>Annual Investment</label>
                <input type="number" required 
                value={userInput.annualInvestment}
                onChange={(event)=>onChangeInput("Annual Investment" ,event.target.value)}></input>
            </p>
        </div>
        <div className="input-group">
            <p>
                <label>Expected Return</label>
                <input type="number" required
                value={userInput.expectedReturn}
                onChange={(event)=>{onChangeInput("Expected Return" ,event.target.value)}}></input>
            </p>
            <p>
                <label>Duration</label>
                <input type="number" required 
                value={userInput.duration}
                onChange={(event)=>onChangeInput("duration" ,event.target.value)}
                ></input>
            </p>
        </div>
    </section>
  )
}

export default UserInput