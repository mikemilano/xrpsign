xrpsign
=======

A command line utility for signing XRP transactions.

When a secret and JSON transaction is passed in, a signed transaction (also JSON) is returned.

## Installation

```
npm install -g xrpsign
```

## Usage

```
xrpsign [secret] [tx_json]
```

The command returns a JSON formatted signed transaction.

## Acknowledgements

This code was adapted form Wietse's Tx example here: 
https://gist.github.com/WietseWind/89a208a832bffcc4e128740e834df7aa
