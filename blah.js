let sortedArray = (a) => {
    for (let i = 0; i < a.length - 1; i++) {
        if (a[i] > a[i + 1]) {
            return false
        }
    }
    return true
}

let maxProfit = (prices, stonks = 0, profit = 0) => {
    const today = prices.shift()
    if (prices.length == 0) {
        if (stonks != 0) {
            return (today - stonks) + profit
        } else {
            return profit
        }
    } else {
        if (prices[0] >= today && stonks == 0) {
            return maxProfit(prices, today, profit)
        } else if (prices[0] > today) {
            return maxProfit(prices, stonks, profit)
        } else if (prices[0] < today && stonks == 0) {
            return maxProfit(prices, stonks, profit)
        } else if (prices[0] < today && stonks < today) {
            return maxProfit(prices, 0, (today - stonks) + profit)
        } else if (today < prices[0]) {
            return maxProfit(prices, today, profit)
        } else if (prices.every(price => price == prices[0])) {
            return 0
        }
    }

};
[2, 1, 2, 0, 1]
[2, 2, 5]
[3, 3]
[6, 1, 3, 2, 4, 7]
[7, 1, 5, 3, 6, 4]
[1, 2, 3, 4]