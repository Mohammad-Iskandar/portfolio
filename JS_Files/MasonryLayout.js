function resizeGridItem(item) {
const grid = item.parentElement;
const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));

const media = item.querySelector('img, video');
const contentHeight = media.getBoundingClientRect().height;

const rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
item.style.gridRowEnd = "span " + rowSpan;
item.classList.add('show');
}

function resizeAllItems() {
const allItems = document.querySelectorAll('.post, .reel');
allItems.forEach((item, index) => {
    const media = item.querySelector('img, video');
    const delay = index * 100; 

    if (media.tagName === 'IMG') {
        if (media.complete) {
            setTimeout(() => resizeGridItem(item), delay);
        } else {
            media.addEventListener('load', () => {
                setTimeout(() => resizeGridItem(item), delay);
            });
        }
    } else {
        media.addEventListener('loadeddata', () => {
            setTimeout(() => resizeGridItem(item), delay);
        });
    }
});
}

window.addEventListener("load", resizeAllItems);
window.addEventListener("resize", resizeAllItems);
setTimeout(resizeAllItems, 2000);