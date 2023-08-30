import { Button, Card, CardBody, Divider, Grid, GridItem, Heading, Image, Radio, RadioGroup, Stack, Text, Wrap, WrapItem, Skeleton } from "@chakra-ui/react"

const SkeletonCards = () => {
    const amountOfComponents = ['', '', '', '', '', '', '', '']
    return (
        <Grid templateColumns='repeat(12, 1fr)' gap={1}>
            <GridItem colSpan={2}>
                <RadioGroup border='1px' borderRadius='lg' mt={10} ml={10} py={4} px={6} shadow='md'>
                    <Stack direction='column'>
                        <Text fontWeight='bold' align='center' borderBottom='1px' pb='8px'>Filtros</Text>
                        <Radio>Todos los productos</Radio>
                        <Radio>Termos</Radio>
                        <Radio>Botellas</Radio>
                        <Radio>Vasos</Radio>
                    </Stack>
                </RadioGroup>
            </GridItem>

            <GridItem colSpan={10}>
                <Wrap spacing='5px' justify='center'>
                    {Array.from({ length: amountOfComponents.length }).map((_, index) => (
                        <WrapItem key={index}>
                            <Card maxW='sm' m={2}>
                                <CardBody>
                                    <Skeleton>
                                        <Image boxSize={'344px'} />
                                    </Skeleton>
                                    <Stack mt='6' spacing='3'>
                                        <Skeleton>
                                            <Heading size='md'>Name</Heading>
                                        </Skeleton>
                                        <Skeleton>
                                            <Text fontSize='2xl'>Precio</Text>
                                        </Skeleton>
                                        <Skeleton>
                                            <Button />
                                        </Skeleton>
                                    </Stack>
                                </CardBody>
                                <Divider />
                            </Card>
                        </WrapItem>
                    ))}
                </Wrap>
            </GridItem>
        </Grid>
    )
}

export default SkeletonCards