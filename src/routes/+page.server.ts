async function myload() {
    return {value: 10};
}

// Works
// export const load = myload;
// Doesn't work
export const { load } = { load: myload };
