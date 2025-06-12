


# 🔗 SimpleBlockchain

A minimal yet functional demonstration of how a **blockchain** works — created from scratch.  
This project showcases core blockchain features like **block creation**, **mining with proof of work**, and **chain validation**.

> 🚧 Future roadmap includes:  
> 🌐 Peer-to-peer node network  
> 💸 Transaction handling  
> 🎁 Coinbase implementation and miner rewards

---

## ⚙️ Current Features

- ✅ Local blockchain creation
- ⛏️ Mining new blocks (Proof of Work)
- 🔐 Block hashing using SHA256
- 🔄 Chain validation

---

## 📸 Sample Output

PS D:\Works\Blockchain> node cli.js 
Blockchain.js loaded
Welcome to the Blockchain CLI!
Available commands:
- create <name>: Create a new blockchain with an optional name
- add <data>: Add a new block with the specified data
- validate: Validate the blockchain
- display: Display the current blockchain
- exit: Exit the CLI
> add Hello
Please create a blockchain first.
create Etherium
Created blockchain: Etherium
> display
Current Blockchain:
[
  {
    "index": 0,
    "previousHash": "0",
    "timestamp": 1749729512421,
    "data": "Genesis Block",
    "hash": "0000dbdb52d04dc20036dbd8313ed055",
    "nonce": 601
  }
]
validate
Validating blockchain...
Blockchain is valid.
exit
Exiting CLI...



---

## 🚀 Getting Started

1. **Clone the repository**
```bash
git clone https://github.com/crocodilelurker/BlockChain-CLI.git
cd BlockChain-CLI
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the app**
```bash
node cli.js
```
4. **Optional**
```bash
you can simulate without POW by setting difficulty to zero else
go for not using or commenting out isValidNextHash in the Blockchain.js
```
---

## 📂 Project Structure

```
BlockChain-CLI/
├── Blockchain.js                    # Core logic
├── cli.js                           # You’re here!
├── Block.js                         # Test cases
└── package.json  # Dependencies
```

---

## 🧠 How It Works

- Each block contains:
  - `index`
  - `timestamp`
  - `data`
  - `proof` (nonce)
  - `previous_hash`
- Proof-of-Work finds a `proof` such that hash(block) starts with `00...`
- The chain is valid if:
  - Each `previous_hash` links correctly
  - Each proof satisfies difficulty condition

---

## 🛣 Roadmap

- [x] Basic blockchain structure
- [x] Mining with Proof of Work
- [x] Chain validation
- [ ] Peer-to-peer node syncing
- [ ] Transaction pool & wallets
- [ ] Coinbase & incentives

---

## 🤝 Contributing

Found a bug or want to suggest an improvement?  
Feel free to fork and submit a pull request! Contributions are welcome. 🌟

---

---

> “Learning blockchain by building one — one block at a time.”  
> Made with ❤️ by [Swagat Sahu]

