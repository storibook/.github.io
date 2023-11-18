const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    var hash = window.location.hash.slice(1)
    if (hash == "") {
      //route to index
    } else {
      //change html
      const text = getPage(hash)
      alert(text)
      document.getElementsByClassName("plaque").innerHTML = text;
    }
  }

  const getPage = async (hash) => {
    alert("in fn 1")
    const page = await fetch("pages/second.html")
    alert("in fn 2")
    alert(page)
    return page
  }