// Works
// export const load = async () => ({value: 10});
// Doesn't work
export const { load } = { load: async () => ({value: 10}) };
