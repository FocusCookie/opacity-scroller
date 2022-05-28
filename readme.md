# Opacity Scroller 👇👀

Add the following code to your HTML. And each text item will be highlighted individually while scrolling down the page.

    <div class="os__wrapper">
        <div class="os__text-container">
        <span class="os__text-item">👨‍🚀</span>
        <span class="os__text-item">🦫</span>
        <span class="os__text-item">🕵️‍♂️</span>
        <span class="os__text-item">👀</span>
        </div>
    </div>

The JS script will add ghost blocks to the os_wrapper. A ghost and a text-item are linked via a unique uuid. If the ghost scrolls through the text-container the linked text-item is highlighted (opacity = 1).

The solution works also with multiple os_wrappers.

You can define the ghost block heights in the CSS file.
