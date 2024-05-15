


export const addCommaToDigits = (value:string) => {
     // adding commas to every last three digits of a price
     const finalValue = value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
 
     return finalValue
   };