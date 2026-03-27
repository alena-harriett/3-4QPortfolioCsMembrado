# Seatwork 2 - Getting to know CSS Position and z-index
## Step 1 : (Static vs Relative)
###### What changed compared to the default static positioning? Try to give different values to top and left or you can change it to bottom, right.

#### The element still takes up its original space in the layout, but you can visually shift it from that position using top, left, right, or bottom.

## Step 2 : (Fixed)
###### Guided Question: What happens when you scroll the page? Why does the footer behave differently from position relative?

#### It will remain at the bottom of the viewport, ensuring it stays visible during scrolling. This behavior is different from position relative, as the footer will not move with the rest of the content as the page scrolls.

## Step 3 : (Absolute)
###### Guided Question: What is the effect of position: absolute on an element? How is it different from fixed?

#### This will position .content relative to its nearest positioned ancestor (or the document body if none exists) and remove it from the normal document flow. Unlike fixed, which stays in place relative to the viewport during scrolling, absolute elements move when their containing block scrolls.

## Step 4 : (Absolute)
###### Guided Question: Why does the notice appear on top of the content? What happens if you swap the z‑index values?

#### The .notice appears on top of .content because it has a higher z-index (2 vs. 1), which gives it a higher stacking order in the same stacking context. If you swap the z-index values, the .content will be rendered above the .notice, hiding it where they overlap.

## Challenge:

* What changes that you have to do on the code that will position .notice box on the top right corner of the .content box? Please write the code on paper as well (both html and css on the part of .notice and .content).
    * s
* Try to change the position of .content to relative then to fixed. What do you observed each time?
* What do you observe on about the effect of z-index on .notice and .content boxes?

## Reflection:
* Could you summarize the differences between the CSS position values (static, relative, absolute, fixed)?
    * `static` is the default positioning, meaning elements follow the normal document flow without special placement. `relative` keeps the element in the flow but allows shifting it slightly from its original spot using top/left/right/bottom. `absolute` and `fixed` remove the element from the flow: `absolute` positions it relative to the nearest positioned ancestor, while `fixed` locks it to the viewport regardless of scrolling.
* How does absolute positioning depend on its parent element?
    * In CSS, when you set an element’s position to absolute, it is removed from the normal document flow and can be placed anywhere using the top, right, bottom, and left properties. However, the reference point for these coordinates is not the page by default. It really depends on the nearest ancestor element that has a position property set to relative, absolute, fixed, or sticky.
* How do you differentiate sticky from fixed (you can research on sticky)?
    * Fixed stays in the same place relative to the viewport even when the page is scrolled.
    * Sticky scrolls until it reaches a specified offset value, then stays in its position within its parent block.
* If you were designing a webpage for a school event, how might you use positioning to highlight important information? Please give concrete examples.
    * I would implement `position: sticky` for a schedule or section navigation bar so it stays at the top while scrolling. 
    * I would implement the `position: fixed` for a “Register Now” button or event date banner in the top-right corner using position: fixed; so it’s always visible.
    * I can make use of `position: absolute; with transform: translate(-50%, -50%)` to perfectly center a pop-up or urgent announcement for events.