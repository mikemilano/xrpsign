xrpsign
=======

A command line utility for signing XRP transactions.

When a secret and JSON transaction is passed in, a signed transaction (also JSON) is returned.

## Installation

** Not on npm yet **

```
git clone https://github.com/mikemilano/xrpsign
cd xrpsign
npm install
```

Then, either run it from source:
```
# Run from source
node cli.js [secret] [tx_json]
```

or link to install it in your path.
```
# Link
npm link

# Run
xrpsign [secret] [tx_json]
```

Once it has been tested properly, I'll push it up to npm.

## Usage

```
xrpsign [secret] [tx_json]
```

The command returns a JSON formatted signed transaction.

## Acknowledgements

This code was adapted form Wietse's Tx example here: 
https://gist.github.com/WietseWind/89a208a832bffcc4e128740e834df7aa
