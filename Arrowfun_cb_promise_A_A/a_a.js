async function getdata(ID) {
  return new Promise((Res, Rej) => {
    setTimeout(() => {
      console.log("Data", ID);
      Res("Success");
    }, 3000);
  });
}

for (var i = 0; i < 10; i = i + 1) {
  await getdata(i);
}
