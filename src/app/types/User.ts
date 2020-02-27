export interface CurrentUser {
    id: number,
    firstName: string,
    lastName: string,
    type: string,
    phoneNumber: string,
    phoneNumber2: string,
    email: string,
    password: string,
    token: string,
    addresses: [
      {
        id: number,
        building: number,
        apartment: number,
        streetDetails: string,
        city: string,
        state: string,
        specialMarque: string
      }
    ]
}
  