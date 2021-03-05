class CommandRegistry {
    constructor() {
      this._registry = new Map();
    }

    add(commandName, fn) {
        this._registry.set(commandName, fn);
    }

    async run(commandName, filepath, params) {
        const command = this._registry.get(commandName);
        return command(filepath, params);
    }
}

// Singleton
const registry = new CommandRegistry();
Object.freeze(registry);

module.exports = registry;