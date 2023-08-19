import React from 'react'
import { Box, Spinner } from '@chakra-ui/react'

const Loading = () => {
    return (
        <>
            <Box align={"center"}>
                <Spinner
                    thickness='4px'
                    speed='0.65s'
                    emptyColor='gray.200'
                    color='blue.500'
                    size='xl'
                />
            </Box>
            <Box align={"center"}>
                <p>Cargando...</p>
            </Box>
        </>
    )
}

export default Loading