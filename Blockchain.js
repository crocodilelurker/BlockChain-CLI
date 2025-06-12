
import { Block } from './Block.js';
import crypto from 'crypto';


export class Blockchain {
    constructor(params){
        this.blockchain= [Block.genesis];
        this.name = params.name || "Unnamed Blockchain";
        this.difficulty=params.difficulty || 1; 
    }
    get(){
        return this.blockchain;
    }
    get latestBlock(){
        return this.blockchain[this.blockchain.length-1];
    }
    isValidHashDifficulty(hash) {
        for(let i = 0; i < hash.length; i++) {
            if (hash[i] !== '0') {
                return ;
            }
        }
        return (i >= this.difficulty) 
    }
    calculateHashForBlock(block)
    {
        const{index, previousHash, timestamp, data, nonce}=block;
        return this.calculateHash(index, previousHash, timestamp, data, nonce);
    }
    calculateHash(index, previousHash, timestamp, data, nonce) {
        return crypto.createHash('sha256')
            .update(index + previousHash + timestamp + data + nonce)
            .digest('hex');
    }
    //45-53 later
    generateNextBlock(data) {
        const previousHash = this.latestBlock.hash;
        const nextIndex = this.latestBlock.index + 1;
        const timestamp = Date.now();
        let nonce = 0;
        let nextHash = this.calculateHash(nextIndex, previousHash, timestamp, data, nonce);
        while (!this.isValidHashDifficulty(nextHash)) {
            nonce++;
            console.log(`${nonce}`);
            nextHash = this.calculateHash(nextIndex, previousHash.hash, timestamp, data, nonce);
        }
        const nextBlock= new Block(nextIndex, previousHash, timestamp, data, nextHash, nonce);
        return nextBlock;
    }
    isValidNextBlock(nextBlock, previousBlock) {
        const nextBlockHash = this.calculateHashForBlock(nextBlock);
         if (previousBlock.index + 1 !== nextBlock.index) {
            return false;
        } else if (previousBlock.hash !== nextBlock.previousHash) {
            return false;
        } else if (nextBlockHash !== nextBlock.hash) {
            return false;
        } else if (!this.isValidHashDifficulty(nextBlockHash)) {
            return false;
        } else {
            return true;
    }
    }
    addBlock(nextBlock) {
        if (this.isValidNextBlock(nextBlock, this.latestBlock)) {
            this.blockchain.push(nextBlock);
            console.log(`Block #${nextBlock.index} has been added to the blockchain!`);
            return true;
        } else {
            throw new Error('Invalid block credentials');
        }
    }
    mine(data)
    {
        const newBlock = this.generateNextBlock(data);
        try {
            this.addBlock(newBlock);
            
        } catch (err) {
            throw err;
        }
    }
    validateChain() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const previousBlock = this.blockchain[i - 1];

            if (currentBlock.hash !== this.calculateHashForBlock(currentBlock)) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
    //115-141 now 

}
console.log("Blockchain.js loaded");