function ticketPrice(tickets) {
  if (tickets <= 100) {
    return tickets * 100;
  } else if (tickets > 100 && tickets <= 200) {
    let first100 = 100;
    let rest = tickets - 100;

    return first100 * 100 + rest * 90;
  } else if (tickets > 200) {
    let first100 = 100;
    let second101_200 = 99;
    let rest = tickets - 200;

    return first100 * 100 + second101_200 * 90 + rest * 70;
  }
}

const finalPrice = ticketPrice(402);
console.log(finalPrice);
