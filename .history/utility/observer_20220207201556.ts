export const IOCallback:IntersectionObserverCallback = (entries,  observer) => {
    entries.forEach(entry => {
        entry.target.className = 'test'
    })
}

export const observer = new IntersectionObserver(IOCallback, {
    threshold:.5
})
