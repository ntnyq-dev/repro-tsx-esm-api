# repro-tsx-esm-api

run `node import.mjs`


```
// No `type: "module"` output
// [Module: null prototype] { default: { default: [Getter] } }

// With `type: "module"` output
// [Module: null prototype] { default: { foo: 'bar' } }
```
