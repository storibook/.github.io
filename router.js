const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    var hash = window.location.hash.slice(1)
    if (hash == "") {
      hash = "featured"
    }
    getPage2(hash).then((text) =>{
      current = document.getElementsByClassName("story")[0]
      current.innerHTML = text
    })
  }

  const getPage = async (hash) => {
    file = "pages/" + hash + ".html"
    const page = await fetch(file).then((response) => response.text())
    return page
  }

  const getPage2 = async (hash) => {
    file = "pages/" + hash + ".html"
    getText(file).then((page, err) =>{
      if (err){
        alert("got bad resp")
      }
      return page
    })
  }

  const getText = async (file) => {
    fetch(file).then(async (data) => {
      page = data.text()
        if (data.ok) {
          return [page, false]
        } else{
            return[page, true]
        }
    })
  }