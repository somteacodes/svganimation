const logo = document.querySelectorAll("#logo path");
 
for (let i = 0; i < logo.length; i++) {
  console.log(`position ${i} has length of ${logo[i].getTotalLength()}`)
}