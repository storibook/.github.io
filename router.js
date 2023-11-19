const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    var hash = window.location.hash.slice(1)
    var story = document.getElementsByClassName("story")[0]

    if (hash == "") {
      hash = "featured"
    }

    getPage(hash).then((text, ok) =>{
      if (ok){
        story.innerHTML = text
      } else{
        story.innerHTML = "Cant find page!"
      }
    })
  }

  const getPage = async (hash) => {
    file = "pages/" + hash + ".html"
    const page = await fetch(file)
    html = page.text()
    return [html, page.ok]
  }