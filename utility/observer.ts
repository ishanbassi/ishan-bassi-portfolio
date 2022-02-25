export const IOCallback:IntersectionObserverCallback = (entries,  observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.className = 'test'
        }
    })
  }

export const observer = new IntersectionObserver(IOCallback, {
    threshold:1
})
