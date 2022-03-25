const mockData = [
    {
        "name": "General Infos",
        "tasks": [
            {
                "description": "Add name and surname",
                "value": 10,
                "checked": true
            }
        ]
    },
    {
        "name": "Accomiplishment",
        "tasks": [
            {
                "description": "Wrote a small poem about the birthdate",
                "value": 23,
                "checked": false
            },
        ]
    },
]

const mockFetch = () => jest.spyOn(global, 'fetch').mockResolvedValue({
    json: jest.fn().mockResolvedValue(mockData)
})

export { mockFetch, mockData }
