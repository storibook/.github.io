const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    var hash = window.location.hash.slice(1)
    if (hash == "") { 
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
    location = "pages/" + hash + ".html"
    const page = await fetch("stories/second.txt").then((response) => response.text())
    alert("got page")
    return page
  }