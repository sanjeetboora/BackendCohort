arr =[ {
        Id: 45,
        Name: "ram"
	},
    {
        Id: 4,
        Name: "raju"
	},
    {
        Id: 90,
        Name: "kumar"
	},
    {
        Id: 35,
        Name: "Vishwas"
	}
]
console.log(arr);
arr.sort((a, b) => a.Id - b.Id);
console.log(arr);
