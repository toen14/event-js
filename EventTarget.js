// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget
const EventTargetCustom = function () {
    this.events = {};

    /**
     * Register event, will be called by emiter
     * @param eventName <string> event name
     * @param callback <function> callback function
     * @param args <any> optional arguments
     * @returns void
     */
    this.addEvenListener = function (eventName, callback, ...args) {
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
     this.dispatchEvent = function(eventName, arg, ...args){
        const event = this.events[eventName];
        if (event) {
            event.callback.forEach(cb => {
                cb(arg, args);
            });            
        }
    }
}

const browser = new EventTargetCustom()
browser.addEvenListener("browserEvent", (arg) => console.log(arg))
browser.dispatchEvent("browserEvent", "it's work!")