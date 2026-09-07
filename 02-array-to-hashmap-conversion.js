const apiResponse = [
    { id: 'emp_101', name: 'Ali', role: 'Developer' },
    { id: 'emp_102', name: 'Sara', role: 'Designer' },
    { id: 'emp_103', name: 'Nauman', role: 'Senior Engineer' }
];


const usersHashMap = apiResponse.reduce((accumulator, currentItem) => {
    accumulator[currentItem.id] = currentItem
    return accumulator;
}, {})

console.log("Converted with Reduce:", usersHashMap);