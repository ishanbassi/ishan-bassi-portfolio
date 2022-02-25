export const callback:IntersectionObserverCallback = (entries,  observer) => {
    entries.forEach(entry => {
        entry.target.className = 'test'
    })
}

const observer = new IntersectionObserver(callback, {
    threshold:.5
})
