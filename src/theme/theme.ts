import { color, extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "gray.400",
                color: "gray.800"
            }
        }
    }
})

export default theme;