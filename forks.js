function getQueryHeaders(wallet) {
    return {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,ru;q=0.8,bg;q=0.7",
        "content-type": "application/json",
        "priority": "u=1, i",
        "sec-ch-ua": "\"Chromium\";v=\"124\", \"Google Chrome\";v=\"124\", \"Not-A.Brand\";v=\"99\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "Referer": `https://layerzeroscan.com/address/${wallet}`,
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Sentry-Trace": generateFormattedString(),
        "Cookie": ""
    }
}
