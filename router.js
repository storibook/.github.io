const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    var hash = window.location.hash.slice(1)
    if (hash == "") {
      //route to index
    } else {
      //change html
      getPage(hash).then((text) =>{
        alert(text)
        current = document.getElementsByClassName("plaque")
        for (const s of current) {
            alert(s.innerHTML)
          }
      })
    }
  }

  const getPage = async (hash) => {
    const page = await fetch("pages/second.html").then((response) => response.text())
    alert("in fn 2")
    return page
  }