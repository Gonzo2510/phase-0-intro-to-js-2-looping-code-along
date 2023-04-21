/*
const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);
*/


const family = ["Romeo", "Susan", "Jacob", "Isabel", "Aaron", "Joe"];

function writeCards(family, event ) {
    const messages = []
    for (let i = 0; i < family.length; i++) {
            messages.push(`Thank you, ${family[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}
//console.log(writeCards(family, "birthday"))

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number --
    }
    return
}

console.log(countDown(99))














