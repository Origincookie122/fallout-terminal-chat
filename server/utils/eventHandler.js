const fs = require('fs');
const path = require('path');
//const { fileURLToPath } = require('url');
const eventsDir = path.join(__dirname, '../Events');

async function handleEvent(io, socket, eventName, ...args) {
    try {
        //console.log(eventName)
        const eventPath = path.join(eventsDir, eventName, 'index.event.js');
        
        const eventModule = require(eventPath);

        if (typeof eventModule === 'function') {
            // Execute the event handler
            eventModule(io, socket, ...args);
        } else if (typeof eventModule.default === 'function') {
            // Execute the default export if it's a function
            eventModule.default(io, socket, ...args);
        }
         else {
            console.warn(`Event handler for ${eventName} is not a function.`);
        }
    } catch (error) {
        console.error(`Error handling event ${eventName}:`, error);
    }
}

module.exports = handleEvent;