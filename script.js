function generateNumber() {

   const min = Math.ceil( document.querySelector(".input-min").value)
   const max = Math.floor(document.querySelector(".input-max").value)

   const result = Math.floor(Math.random() * (max - min + 1) + min);
  
   if (min >= max) {
      alert("Número máximo não pode ser menor ou igual ao número mínimo")
   }
   else {
      alert(result)
   }
  
   
}
