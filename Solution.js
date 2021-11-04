class Solution {
    solve(n) {
        // n ** 1.5
        // Math.sqrt(n)
        let root = 5
        let temp = 1/2 * (root + (n / root)) 
        while (temp !== root){
            root = temp
            temp = 1/2 * (root + (n / root)) 
        }
        return Math.floor(temp);


    }
}
