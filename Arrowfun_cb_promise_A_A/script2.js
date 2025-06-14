function getdata(id, getnextdata) {
  setTimeout(() => {
    console.log("data found: ", id);
    if (getnextdata) {
      getnextdata();
    }
  }, 2000);
}

getdata(1, () => {
  console.log("getting next data");
  getdata(2, () => {
    console.log("getting next data");
    getdata(3, () => {
      console.log("getting next data");
      getdata(4, () => {
        console.log("getting next data");
        getdata(5);
      });
    });
  });
});
