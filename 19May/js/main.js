let rightList = document.querySelector('#listTwo')
let leftListItem = document.querySelectorAll('#listOne li')

let leftList = document.querySelector('#listOne')
let rightListItem = document.querySelectorAll('#listTwo li')

leftList.addEventListener('dragover',function(l){
    l.preventDefault();
})
rightList.addEventListener('dragover',function(r){
    r.preventDefault();
})


leftListItem.forEach(ele => {
    ele.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',ele.getAttribute('data-id'));
    })
});
rightListItem.forEach(ele=>{
    ele.addEventListener('dragstart',function(e){
        e.dataTransfer.setData('dataId',ele.getAttribute('data-id'));
    })
})

    

rightList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]');
    this.appendChild(li);
})
leftList.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]')
    this.appendChild(li);
})

let box = document.querySelector('.main-box')

box.addEventListener('dragover',function(m){
    m.preventDefault();
})
box.addEventListener('drop',function(e){
    let dataId = e.dataTransfer.getData('dataId');
    let li = document.querySelector('[data-id="'+dataId+'"]')

    let p = document.createElement('p')
    p.innerText = li.innerText;

    li.remove();
    this.appendChild(p);
})

