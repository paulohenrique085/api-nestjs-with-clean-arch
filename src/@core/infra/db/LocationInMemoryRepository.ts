import { Location } from "src/@core/domain/entity/Location";

export class LocationInMemoryRepository {
    constructor(private locations: { [id: string]: Location } = {}) { }

    async save(location: Location): Promise<void> {
        this.locations[location.id] = location;
    }
    async findAll(): Promise<Location[]> {
        return Object.values(this.locations)

    }
}
