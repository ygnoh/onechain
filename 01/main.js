const CryptoJS = require("crypto-js");
const merkle = require("merkle");

function calculateHash(version, index, previousHash, timestamp, merkleRoot) {
    return CryptoJS.SHA256(version + index + previousHash + timestamp + merkleRoot).toString().toUpperCase();
}

function calculateHashForBlock(block) {
    const {version, index, previousHash, timestamp, merkleRoot} = block.header;

    return calculateHash(version, index, previousHash, timestamp, merkleRoot);
}

function getGenesisBlock() {
    const data = ["Project configurations files can be added to Git."];
    const merkleRoot = merkle("sha256").sync(data).root();
    const header = new BlockHeader(
        "1.0.0",
        0,
        "0".repeat(64),
        1231006505,
        merkleRoot
    );

    return new Block(header, data);
}

class BlockHeader {
    constructor(version, index, previousHash, timestamp, merkleRoot) {
        this.version = version;
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.merkleRoot = merkleRoot;
    }
}

class Block {
    constructor(header, data) {
        this.header = header;
        this.data = data;
    }
}

const blockchain = [getGenesisBlock()];

function getBlockchain() {
    return blockchain;
}

function getLatestBlock() {
    return blockchain[blockchain.length - 1];
}
