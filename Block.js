export class Block{
    constructor(index, previousHash, timestamp, data, hash, nonce) {
        this.index = index;
        this.previousHash = previousHash;
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash;
        this.nonce = nonce;
    }
    static get genesis(){
        return new Block(0, "0", Date.now(), "Genesis Block", "0000dbdb52d04dc20036dbd8313ed055",601);
    }
}