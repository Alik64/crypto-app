var options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
        referenceCurrencyUuid: 'yhjMzLPhuIDl',
        timePeriod: '24h',
        tiers: '1',
        orderBy: 'marketCap',
        orderDirection: 'desc',
        limit: '50',
        offset: '0'
    },
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '5060905529msha51d43286a159d8p13d628jsnee1181358469'
    }
};