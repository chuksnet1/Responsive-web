window.addEventListener("scroll", setScrollVar);
window.addEventListener("resize", setScrollVar);


function setScrollVar(){
    const htmLElement = document.documentElement;    //html tag from the from the index.html on top the page
    const percentOfScreenHeightScrolled = htmLElement.scrollTop/htmLElement.clientHeight
    
    console.log(Math.min(percentOfScreenHeightScrolled * 100, 100))
    htmLElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
}


setScrollVar();

const observer = new IntersectionObserver((entries)=>{
    //to ensure it start from top to bottom and if two item are at the screen at thesame time, the one that is further below will me triggered first.
    for (let i = entries.length - 1; i >= 0; i--) {
        const entry = entries[i];
        if (entry.isIntersecting) {
            document.querySelectorAll("[data-img").forEach(img=>{
                img.classList.remove("show")
            })
            const img = document.querySelector(entry.target.dataset.imgToShow)
            img?.classList.add("show");
            break
        }
    }
});

const htmlImgElement = document.querySelectorAll("[data-img-to-show]");
htmlImgElement.forEach((eachSectionVal)=> observer.observe(eachSectionVal));

