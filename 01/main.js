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

const blockchain = [];

function getBlockchain() {
    return blockchain;
}

function getLatestBlock() {
    return blockchain[blockchain.length - 1];
}
