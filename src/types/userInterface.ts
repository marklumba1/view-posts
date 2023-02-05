export default interface users {
    id: number,
    name: string,
    email: string,
    address: {
        street: string,
        suit: string,
        city: string,
        zipdcode: string,
        geo: {
            lat: string,
            lng: string
        }
    },
    phone: string,
    website: string,
    company: {
        name: string,
        catchPhrase: string,
        bs: string
    }
}