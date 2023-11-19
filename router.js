const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    const path = getPath()
    getPage(path).then((page) => {
      var story = document.getElementsByClassName("story")[0]
      story.innerHTML = page
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
    if (! page.ok){
      return `<p class="stitle"> can't find page </p>`
    }
    return page.text()
  }