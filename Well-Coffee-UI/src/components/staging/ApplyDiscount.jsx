import { useState } from 'react';

export default function ApplyDiscount () {

   const [discount, setDiscount] = useState(" ")

   const percentages = [
    {label: 1, value: " "},
    {label: .9, value: "10%"},
    {label: .8, value: "20%"},
    {label: .7, value: "30%"},
    {label: .6, value: "40%"},
    {label: .5, value: "50%"},
    {label: .4, value: "60%"},
    {label: .3, value: "70%"},
    {label: .2, value: "80%"},
    {label: .1, value: "90%"}];

   const handleChange = (event) => {
      setDiscount(event.target.value);
   }

   let price = 100;

   let percentageOptions = percentages.map((percentage, index) => {
      return <option key={index} value={percentage.label*price}>{percentage.value}</option>
   });

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Apply discount: </label>
      <select value={percentages.label} onChange={handleChange}>
      {percentageOptions}
      </select>

      <p>Discounted price: ${discount}</p>
      <p>Original price: ${price}</p>
      </div>
   );
}
