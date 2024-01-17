
import { LocationInMemoryRepository } from "src/@core/infra/repository/inMemory/LocationInMemoryRepository"
import { RegisterLocation } from "src/@core/application/@usecases/RegisterLocation"



test("Must register one location", async () => {

    const input = {
        latitude: '1',
        longitude: '-1'
    }

    const customerRepository = new LocationInMemoryRepository()

    const registerCustomer = new RegisterLocation(customerRepository)

    const output = await registerCustomer.execute(input)



})
