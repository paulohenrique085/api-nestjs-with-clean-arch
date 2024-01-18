import { Location } from "src/@core/domain/entity/Location"

export interface LocationRepositoryInterface {
    save(location: Location): Promise<void>
    findAll(): Promise<Location[]>
}