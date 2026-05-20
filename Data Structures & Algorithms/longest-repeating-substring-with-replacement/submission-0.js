class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let longest = 0;
        const A = 'A'.charCodeAt(0);
        const freq = new Array(26).fill(0);
        let left = 0;
        let maxOfChar = 0;
        

        for (let right = 0; right < s.length; right++) {
            const rIdx = s.charCodeAt(right) - A;
            freq[rIdx]++;
            maxOfChar = Math.max(maxOfChar, freq[rIdx]);

            // replacements needed > k, make it smaller
            while ((right - left + 1) - maxOfChar > k) {
            const lIdx = s.charCodeAt(left) - A;
            freq[lIdx]--;
            left++;
            }

            longest = Math.max(longest, right - left + 1);
        }

        return longest;
    }
}
