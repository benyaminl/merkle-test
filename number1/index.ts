/**
 * Simple Number 1 merkle innovation Algo Challenge
 * @param length The Length of the row you need, by default 5
 */
const printAlgo = (length: number = 5) => {
    for (var i = 1; i <= length; i++) {
        let temp: number = 0;
        let text = "";
        for (var j = 1; j <= 5; j++)
        {
            temp += i;
            text += temp.toString() + " ";
        }
        console.log(text);
    }
};

printAlgo();