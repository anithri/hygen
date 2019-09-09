# v5 Ideas

# Program Flow

### bin

- creates default config
- calls runner

### runner

- resolves config
  - from `process.cwd()` climbing to `/`, seek `.hygen.js` files
  - uses first found

