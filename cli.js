#!/usr/bin/env node
const ripple = require('ripplelib')
const sign = require('ripple-sign-keypairs')

const argv = require('yargs')
    .usage('Usage: $0 [secret] [tx_json]')
    .demandCommand(2)
    .argv

const secret = argv._[0]
const txJSON = argv._[1]

const seed = ripple.Seed.from_json(secret)
const key = seed.get_key()
const keyPair = { privateKey: '00' + key.to_hex_pri(), publicKey: key.to_hex_pub() }

const txSign = sign(txJSON, keyPair)

console.log(JSON.stringify(txSign))

process.exit(0)
