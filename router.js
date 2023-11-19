const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    const path = getPath()
    var story = document.getElementsByClassName("story")[0]

    getPage(path).then((data) =>{/*
      [text, ok] = data
      if (ok){
        story.innerHTML = text
      } else{
        story.innerHTML = `<p class="stitle"> can't find page </p>`
      }*/
      story.innerHTML = data
    })
  }

  const getPath = () => {
    var hash = window.location.hash.slice(1)
    if (hash == "") {
      hash = "featured"
    }
    return "stories/" + hash + ".html"
  }

  const getPage = async (file) => {
    const page = await fetch(file)
    text = page.text()
    ///return [text, page.ok]
    return text
  }