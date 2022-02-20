function json(url) {
  return fetch(url).then(res => res.json());
}

let apiKey = '5b5f14723ccf3f576ce8c2e95b3b68bf9151303ea50c447f84ba9371';
json(`https://api.ipdata.co?api-key=${apiKey}`).then(data => {
  console.log(data.ip);
  console.log(data.city);
  console.log(data.country_code);
  // so many more properties
});
