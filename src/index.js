const fs = require("fs")

let fileAdress = "./bin/test.ael"
let content;


try {
content = fs.readFileSync(fileAdress, "utf-8");

} catch (e) {
    //Handle file not found error
    process.exit(0)
}

let rows = content.split("\n")

rows = rows.filter(row => row !== "" && row !== undefined)

console.log(rows);



let blocksAmount = 0
let blocksStarted = 0


let blocks = {};

for (let r = 0; r < rows.length; r++) {
    for (let c = 0; c < rows[r].length; c++) {
        if (rows[r][c] === "{") {
            blocksStarted++;
        }
    }

    for (let c = 0; c < rows[r].length; c++) {
        if (rows[r][c] === "}") {
            blocksStarted--;
            blocksAmount++;
        }
    }

    if (blocks[`block${blocksAmount + blocksStarted}`] === undefined) {
        blocks[`block${blocksAmount + blocksStarted}`] = []
    }
    if (blocks[`block${blocksAmount + blocksStarted}`].slice(-1).slice(-1).toString().includes("}")) {
        blocks[`block${blocksAmount + blocksStarted - 1}`].push(rows[r])
    } else {
        blocks[`block${blocksAmount + blocksStarted}`].push(rows[r])
    }
    

}

console.log(blocks)