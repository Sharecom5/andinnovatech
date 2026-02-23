export interface CanadaLocation {
    city: string;
    province: string;
    provinceCode: string;
    slug: string;
}

export const canadaLocations: CanadaLocation[] = [
    { city: 'Brampton', province: 'Ontario', provinceCode: 'ON', slug: 'brampton-ontario' },
    { city: 'Mississauga', province: 'Ontario', provinceCode: 'ON', slug: 'mississauga-ontario' },
    { city: 'Hamilton', province: 'Ontario', provinceCode: 'ON', slug: 'hamilton-ontario' },
    { city: 'London', province: 'Ontario', provinceCode: 'ON', slug: 'london-ontario' },
    { city: 'Markham', province: 'Ontario', provinceCode: 'ON', slug: 'markham-ontario' },
    { city: 'Kitchener', province: 'Ontario', provinceCode: 'ON', slug: 'kitchener-ontario' },
    { city: 'Windsor', province: 'Ontario', provinceCode: 'ON', slug: 'windsor-ontario' },
    { city: 'Surrey', province: 'BC', provinceCode: 'BC', slug: 'surrey-bc' },
    { city: 'Burnaby', province: 'BC', provinceCode: 'BC', slug: 'burnaby-bc' },
    { city: 'Kelowna', province: 'BC', provinceCode: 'BC', slug: 'kelowna-bc' },
    { city: 'Abbotsford', province: 'BC', provinceCode: 'BC', slug: 'abbotsford-bc' },
    { city: 'Red Deer', province: 'Alberta', provinceCode: 'AB', slug: 'red-deer-alberta' },
    { city: 'Lethbridge', province: 'Alberta', provinceCode: 'AB', slug: 'lethbridge-alberta' },
    { city: 'Medicine Hat', province: 'Alberta', provinceCode: 'AB', slug: 'medicine-hat-alberta' },
    { city: 'Regina', province: 'Saskatchewan', provinceCode: 'SK', slug: 'regina-saskatchewan' },
    { city: 'Saskatoon', province: 'Saskatchewan', provinceCode: 'SK', slug: 'saskatoon-saskatchewan' },
    { city: 'Winnipeg', province: 'Manitoba', provinceCode: 'MB', slug: 'winnipeg-manitoba' },
    { city: 'Halifax', province: 'Nova Scotia', provinceCode: 'NS', slug: 'halifax-nova-scotia' },
    { city: 'Moncton', province: 'New Brunswick', provinceCode: 'NB', slug: 'moncton-new-brunswick' },
];
