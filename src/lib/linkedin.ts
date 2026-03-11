export async function getLinkedInUserUrn(accessToken: string) {
    const response = await fetch('https://api.linkedin.com/v2/userinfo', {
        headers: { 'Authorization': `Bearer ${accessToken}` },
    });
    const data = await response.json();
    return data.sub; // This is the unique ID (member URN)
}

export async function postToLinkedIn(accessToken: string, text: string) {
    const userUrn = await getLinkedInUserUrn(accessToken);

    const body = {
        author: `urn:li:person:${userUrn}`,
        lifecycleState: 'PUBLISHED',
        specificContent: {
            'com.linkedin.ugc.ShareContent': {
                shareCommentary: {
                    text: text
                },
                shareMediaCategory: 'NONE'
            }
        },
        visibility: {
            'com.linkedin.ugc.MemberNetworkVisibility': 'PUBLIC'
        }
    };

    const response = await fetch('https://api.linkedin.com/v2/ugcPosts', {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
            'X-Restli-Protocol-Version': '2.0.0'
        },
        body: JSON.stringify(body)
    });

    return await response.json();
}
