export type CitySEO = {
    slug: string;
    name: string;
    state: string; // Used for State in USA/India and Province in Canada
    stateCode: string; // Used for State Code in USA/India and Province Code in Canada
    country: 'USA' | 'Canada' | 'India';
    population: string;
    region: string;
    timezone: string;
    knownFor: string;
    topIndustries: string[];
    businessScene: string;
    seoChallenge: string;
    searchBehavior: string;
    localKeyword: string;
    uniqueFact: string;
    avgBusinessSize: 'startup' | 'SMB' | 'enterprise' | 'mixed';
    googleMapsPriority: string;
    contentOpportunity: string;
    nearbyCity: string;
    nearbyCitySlug: string;
    callToAction: string;
};
