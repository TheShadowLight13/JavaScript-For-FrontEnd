function printLines(lines) {
    for (let line of lines) {
        if (line === "Stop") {
            return;
        }

        console.log(line);
    }
}

let input = ["Line 1", "Line 2", "Line 3", "Stop"];
printLines(input);