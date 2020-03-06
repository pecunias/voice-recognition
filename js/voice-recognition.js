if (annyang) {
    const sections = window.document.getElementsByClassName('slides')[0].children;
    let commands = {};
    for (let index = 0; index < sections.length; index++) {
        const elementId = sections[index].getAttribute('id');
        let slideEvent = new CustomEvent('slide', {detail: index})
        if (elementId.indexOf('-') !== -1) {
            commands[elementId.replace('-', ' ')] = function() {
                window.dispatchEvent(slideEvent);
            };
        } else {
            commands[elementId] = function() {
                window.dispatchEvent(slideEvent);
            };
        }
    }
    // Add our commands to annyang
    annyang.addCommands(commands);
  
    // Start listening.
    annyang.start();
  }