const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    var hash = window.location.hash.slice(1)
    if (hash == "") {
      //route to index
      getPage("featured").then((text) =>{
        alert(text)
        current = document.getElementsByClassName("story")[0]
        alert(current.innerHTML)
        current.innerHTML = text
      })
    } else {
      //change html
      getPage(hash).then((text) =>{
        alert(text)
        current = document.getElementsByClassName("story")[0]
        alert(current.innerHTML)
        current.innerHTML = text
      })
    }
  }

  const getPage = async (hash) => {
    file = "pages/" + hash + ".html"
    const page = await fetch(file).then((response) => response.text())
    return page
  }