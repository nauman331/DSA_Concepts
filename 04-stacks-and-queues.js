// STACK IMPLEMENTATION (LIFO)
class NavigationStack {
    constructor() {
        this.screens = [];
    }
    navigate(screenName) {
        this.screens.push(screenName);
        console.log(`Navigated to: ${screenName}`);
    }
    goBack() {
        if (this.screens.length === 0) return "No screens to go back to.";
        const removedScreen = this.screens.pop();
        console.log(`Going back from: ${removedScreen}`);
    }
}

const myApp = new NavigationStack();
myApp.navigate('Home');
myApp.navigate('Profile');
myApp.navigate('Settings');
myApp.goBack();

// QUEUE IMPLEMENTATION (FIFO)

class OfflineSyncQueue {
    constructor() {
        this.requests = [];
    }
    addRequest(apiCall) {
        this.requests.push(apiCall);
        console.log(`Added to sync queue: ${apiCall}`);
    }
    processNext() {
        if (this.requests.length === 0) return "Queue is empty.";
        const nextRequest = this.requests.shift();
        console.log(`Processing API: ${nextRequest}`);
    }
}

const syncSystem = new OfflineSyncQueue();
syncSystem.addRequest('Accept_Job_101');
syncSystem.addRequest('Update_Profile');
syncSystem.processNext();