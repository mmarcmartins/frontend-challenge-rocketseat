import { PaymentButton as CustomButton } from "../CheckoutDetails/style"
import Container from "../Container"

export const GenericError = ({reset}: {reset: VoidFunction}) => {
    return(
        <Container>
            <h1>Tivemos um erro inesperado 😭😭</h1>
            <CustomButton
                onClick={
                () => reset()
                }
            >
                Tente novamente
            </CustomButton>
        </Container>
    )
}