// Decouple the networking from image processing
class CommandRegistry {
    constructor() {
      this._registery = new Map();
    }

    add(commandName, fn) {
        this._registery.set(commandName, fn);
    }

    get(commandName) {
        return this._registery.get(commandName);
    }
}

// Make singleton
const registry = new CommandRegistry();
Object.freeze(registry);

module.exports = registry;