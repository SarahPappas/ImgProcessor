class CommandRegistry {
    constructor() {
      this._registry = new Map();
    }

    add(commandName, fn) {
        this._registry.set(commandName, fn);
    }

    // TODO change to run
    get(commandName) {
        return this._registry.get(commandName);
    }
}

// Make singleton
const registry = new CommandRegistry();
Object.freeze(registry);

module.exports = registry;