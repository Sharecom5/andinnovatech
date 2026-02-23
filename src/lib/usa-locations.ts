export interface UsaLocation {
    city: string;
    state: string;
    stateCode: string;
    slug: string;
}

export const usaLocations: UsaLocation[] = [
    { city: 'Mesa', state: 'Arizona', stateCode: 'AZ', slug: 'mesa-arizona' },
    { city: 'Boise', state: 'Idaho', stateCode: 'ID', slug: 'boise-idaho' },
    { city: 'Cape Coral', state: 'Florida', stateCode: 'FL', slug: 'cape-coral-florida' },
    { city: 'Chandler', state: 'Arizona', stateCode: 'AZ', slug: 'chandler-arizona' },
    { city: 'Spokane', state: 'Washington', stateCode: 'WA', slug: 'spokane-washington' },
    { city: 'Huntsville', state: 'Alabama', stateCode: 'AL', slug: 'huntsville-alabama' },
    { city: 'Reno', state: 'Nevada', stateCode: 'NV', slug: 'reno-nevada' },
    { city: 'Murfreesboro', state: 'Tennessee', stateCode: 'TN', slug: 'murfreesboro-tennessee' },
    { city: 'Lubbock', state: 'Texas', stateCode: 'TX', slug: 'lubbock-texas' },
];
