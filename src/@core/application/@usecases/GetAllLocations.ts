

import { LocationRepositoryInterface } from "../repository/LocationRepository";

export class GetAllLocations {
    constructor(private locationRepository: LocationRepositoryInterface) { }

    async execute(): Promise<Output> {
        return this.locationRepository.findAll()

    }
}

type Output = { latitude: string, longitude: string }[]