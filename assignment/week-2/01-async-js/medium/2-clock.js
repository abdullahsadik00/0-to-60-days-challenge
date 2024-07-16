setInterval(() => {
  let d = new Date();
  let hours12 = d.getHours();

  let period = hours12 >= 12 ? "PM" : "AM";
  console.log(d.getHours() + ":", d.getMinutes() + ":", d.getSeconds(), period);
}, 1000);
