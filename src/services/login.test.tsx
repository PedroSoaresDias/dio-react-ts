import { login } from "./login"

describe('login', () => {
    const mockLogin = jest.fn()
    window.alert = mockLogin;

    it("Deve exibir um alert com boas vindas", () => {
        login()
        expect(mockLogin).toHaveBeenCalledWith("Seja muito bem vindo(a) ao DIO Bank!")
    })
})