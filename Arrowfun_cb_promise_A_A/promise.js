
function xyz(ID) {
    return new Promise((Res, Rej) => {
      setTimeout(() => {
        if (ID !== 3) {
          console.log("Data", ID);
          Res("Success");
        } else {
          Rej("error");
        }
      }, 3000);
    });
  }
  

  xyz(1)
    .then((res) => {
      return xyz(2);
    })
    .then((res) => {
      return xyz(3);
    })
    .then((res) => {
      console.log(res);
    })
    .catch((rej) => {
      console.log("error occured");
    });
  


