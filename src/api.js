export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans";

    const res = await fetch(url);
    const data = await res.json();
    return data.vans;
}

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans";
    const res = await fetch(url);
    if (!res.ok) {
        const errObject = {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status,
        };
        throw errObject;
    }
    const data = await res.json();
    return data.vans;
}

export async function loginUser(creds) {
    const res = await fetch("/api/login", {
        method: "post",
        body: JSON.stringify(creds),
    });
    const data = await res.json();

    if (!res.ok) {
        const errorObject = {
            message: data.message,
            statusText: res.statusText,
            status: res.status,
        };

        throw errorObject;
    }

    return data;
}
