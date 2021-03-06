import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import Resevationcardd from './components/resevationcard';
//import Resevationcard from './components/resevationcard';


function App() {

    const reservation=useSelector((state:RootState)=>state.resevationslice.value)


  return (
    <div className="App">
    <div className="container">
      <div className="reservation-container">
        <div>
          <h5 className="reservation-header">Reservations</h5>
          <div className="reservation-cards-container">
          {reservation.map((name,i)=>{
              <Resevationcardd name={name} />
              //console.log(name)
          })}
            
          </div>
        </div>
        <div className="reservation-input-container">
          <input />
          <button>Add</button>
        </div>
      </div>
      <div className="customer-food-container">
        <div className="customer-food-card-container">
          <p>Selena Gomez</p>
          <div className="customer-foods-container">
            <div className="customer-food"></div>
            <div className="customer-food-input-container">
              <input />
              <button>Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;
