
# What is this?

This is a very silly and simple test that basically loads this site
http://html5demos.com/drag where you will be able to verify if drag and drop
works inside an [Electron](https://electron.atom.io/) window.

# Why?

Drag and drop in an Electron window was not working for me on OS X. The app I
was writing uses [react](https://facebook.github.io/react/) and [react-dnd](https://github.com/react-dnd/react-dnd/) and everything worked fine in
Linux, Windows or other Macs. So, I figured out that I could just try the most
simplest thing which is to load http://html5demos.com/drag and see what
happened. I did, and it didn't work! After a few minutes I tried it again and
this time it worked. So, what was the difference? tmux! For some reason I
haven't yet figured out, drag and drop doesn't work if you launch the Electron
app from a shell in tmux. It gives you these errors:

    Electron[52453:1365337] CoreDragCreate error: -4960
    Electron[52453:1365337] error in CoreDragDispose: -1850

# Try it!

Clone the repo and then type:

    $ npm install
    $ npm start

Then, do what the window tells you to do.

**Note:** Run it inside tmux if you want it not to work.
