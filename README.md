# Microfrontends Shared Communication

This repo demonstrates some patterns for sharing state, or using event driven communication between Microfrontends. The examples include:

- An event driven logger where the host owns the implementation and the remotes emit events back to the host
- Sharing a redux store between the host and remotes - React context does not work out of the box, but can be made to work.
- Sharing a custom store implementation between the host and remotes without an external dependency - useSyncExternalStore hook
- Sharing react-query state between microfrontends using the same useSyncExternal hook

The examples above are not intended for production use. Further optimizations may be required to limit re-renders, etc.
