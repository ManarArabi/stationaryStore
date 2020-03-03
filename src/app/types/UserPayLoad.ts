export interface User {
    id: string,
    firstName: string,
    lastName: string,
    type: string,
    phoneNumber: string,
    phoneNumber2: string,
    email: string,
    password: string,
    addresses: [
      {
        building: number,
        apartment: number,
        streetDetails: string,
        city: string,
        state: string,
        specialMarque: string
      }
    ]
}
  