import { Location } from "src/@core/domain/entity/Location";
import { LocationRepository } from "src/@core/application/repository/LocationRepository";

export class LocationInMemoryRepository {
    constructor(private locations: { [id: string]: Location } = {}) { }


    async save(location: Location): Promise<void> {
        this.locations[location.id] = location;
    }


}
