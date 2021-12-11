// https://nodejs.org/dist/latest-v16.x/docs/api/events.html#events
class EventEmitterCustom {
    
    constructor(){
        this.events = {};
    }

    /**
     * Register event, will be called by emiter
     * @param eventName <string> event name
     * @param callback <function> callback function
     * @param args <function> optional callbacks
     * @returns void
     */
    on(eventName, callback, ...args){
        args.length ? callback = [callback, args] : callback = [callback];
        this.events[eventName] = {
            eventName,
            callback
        };
    }

    /**
     * Trigger registered event
     * @param eventName <string> event name
     * @param callback <function> callback function
     * @param args <any> optional arguments
     * @returns void
     */
    emit(eventName, arg, ...args){
        const event = this.events[eventName];
        if (event) {
            event.callback.forEach(cb => {
               cb(arg, args);
            });            
        }
    }
}

const node = new EventEmitterCustom()
node.on("nodeEvent", (arg) => console.log(arg))
node.emit("nodeEvent", "it's work!")