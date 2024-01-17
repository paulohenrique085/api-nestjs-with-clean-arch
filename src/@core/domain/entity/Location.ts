import { UUID } from "./UUID";

export class Location {
    constructor(
        readonly id: string,
        readonly latitude: string,
        readonly longitude: string
    ) { }

    static create(latitude: string, longitude: string) {
        return new Location(UUID.randomUUID(), latitude, longitude);
    }
}
