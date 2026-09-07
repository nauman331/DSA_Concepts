
// ARRAY APPROACH (O(n) - Slow for searching)
const jobsArray = [
    { id: 'job_1', title: 'Security Guard', location: 'Texas' },
    { id: 'job_2', title: 'Event Staff', location: 'California' },
    // ... imagine 10,000 more jobs here ...
    { id: 'job_10000', title: 'VIP Escort', location: 'New York' }
];

function findJobInArray(targetId) {
    // .find() har item ko bari bari check karega jab tak match na mil jaye
    const result = jobsArray.find(job => job.id === targetId);
    return result;
}

console.log(findJobInArray('job_10000'));


// HASHMAP / OBJECT APPROACH (O(1) - Super Fast)
const jobsHashMap = {
    'job_1': { title: 'Security Guard', location: 'Texas' },
    'job_2': { title: 'Event Staff', location: 'California' },
    // ... 10,000 more jobs ...
    'job_10000': { title: 'VIP Escort', location: 'New York' }
};

function findJobInHashMap(targetId) {
    // Koi loop nahi! Direct memory location se data utha liya
    const result = jobsHashMap[targetId];
    return result;
}

console.log(findJobInHashMap('job_10000')); 