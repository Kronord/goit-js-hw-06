const categoryRef = item => {
        console.log("Number of categories:", item.length)
        
    item.forEach(el => {
        console.log("Category:", el.firstElementChild.textContent);
        console.log("Elements:", el.lastElementChild.children.length);
    });
};

categoryRef(document.querySelectorAll(".item"));