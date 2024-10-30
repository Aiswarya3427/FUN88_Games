import React from 'react';
import {
    ModalHeader,
    ModalDescription,
    ModalContent,
    ModalActions,
    Button,
    Grid, GridRow,
    GridColumn,
    Icon,
    Image,
    Modal,
} from 'semantic-ui-react'

export default function Favorites(props) {
    const [open, setOpen] = React.useState(false);

    return (
        <Modal
            open={open}
            size="small"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button icon style={{ color: 'black', backgroundColor: 'white' }}><Icon name='star' /> FAVORITES</Button>}
        >
            <ModalHeader>Favorites</ModalHeader>
            <ModalContent image scrolling>
                <ModalDescription>
                    <Grid>
                        <GridRow columns={3}>
                            {props.selectedGames.map((item, index) => {
                                return (
                                    <GridColumn key={index}>
                                        <Image size="small" src={item.src} />
                                    </GridColumn>
                                )
                            })}
                        </GridRow>
                    </Grid>
                </ModalDescription>
            </ModalContent>
            <ModalActions>
                <Button onClick={() => setOpen(false)} primary>
                    Close <Icon name='chevron right' />
                </Button>
            </ModalActions>
        </Modal>
    )
}