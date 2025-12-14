const swapi = require('./script2');

it('calls swapi to get people (promise version)', () => {
    expect.assertions(1);
    return swapi.getPeoplePromise().then(data => {
        expect(data.count).toEqual(82);
    });
});

it('calls swapi to get people (async version)', async () => {
    expect.assertions(2);
    const data = await swapi.getPeople();
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
});

it('getPeople returns count and results', async () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 82,
            results: [1, 2, 3, 4, 5, 6],
        }),
    }));
    expect.assertions(2);
    const data = await swapi.getPeoplePromise(mockFetch);
    //expect(mockFetch.mock.calls.length).toBe(1);
    //expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/');
    expect(data.count).toEqual(82);
    expect(data.results.length).toBeGreaterThan(5);
}); 

