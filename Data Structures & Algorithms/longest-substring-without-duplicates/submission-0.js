class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
    let left = 0;
    let best = 0;
    const last = new Map(); // char -> most recent index

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        // If ch is inside current window, move left past its previous index
        if (last.has(ch) && last.get(ch) >= left) {
        left = last.get(ch) + 1;
        }

        last.set(ch, right);
        best = Math.max(best, right - left + 1);
    }

    return best;

    }
}
