const ok = document.querySelector('.ok')

const promise =new Promise((resolve, reject) => {
    setTimeout(() => {
       
        ok.style.display = "block"
      
    //    const res = (console.log("client get response from  server", res))
    //    resolve(res)
    },2000)
})