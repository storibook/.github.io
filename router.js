const listen = () => {
    window.addEventListener("hashchange", route)
  }
  
  const route = () => {
    const path = getPath()
    var story = document.getElementsByClassName("story")[0]

    getPage(path).then((page) => {
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
    text = page.text()
    if (page.ok){
      return text
    } else{
      return `<p class="stitle"> can't find page </p>`
    }
  }