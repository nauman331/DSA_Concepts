const postComments = [
    {
        id: 1,
        text: "Great App!",
        replies: [
            {
                id: 2,
                text: "Thanks! Did you try the new feature?",
                replies: [
                    { id: 3, text: "Yes, it's very fast.", replies: [] }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "Found a bug on login.",
        replies: []
    }
];

function renderComments(commentsArray, depth = 0) {
    const indent = "-".repeat(depth * 2);
    commentsArray.forEach(comment => {
        console.log(`${indent}> ${comment.text}`);
        if (comment.replies && comment.replies.length > 0) {
            renderComments(comment.replies, depth + 1);
        }
    });
}

renderComments(postComments);