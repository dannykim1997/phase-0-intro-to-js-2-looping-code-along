// Code your solutions in this file
const names = ["Lisa", "Kaitlin", "Jan"]

function writeCards(names, event) {
    let cards=[]
    for (let i=0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

let number = 10
function countDown(number) {
while (number >= 0) 
  console.log(number--);
} 