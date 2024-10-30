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

export default function Provider(props) {
    const [open, setOpen] = React.useState(false);
    const [setProviderData] = React.useState([]);
    const [providerList, setProviderList] = React.useState([]);
    React.useEffect(() => {
        let imageProviderList = []
        if (props.providerData) {
                props.providerData.map(function(item) {
                    if (!imageProviderList.includes(item.providerSrc)) {
                        imageProviderList.push(item.providerSrc);
                    }
                })
            
            setProviderList(imageProviderList);
        }

    }, []);
    const handleProviderClick = (providerData) => {
        let provider = [];
        {
            props.providerData.map((item) => {
                if (providerData === item.providerSrc) {
                    provider.push(item);
                }
            })
        }
        setProviderData(provider);
        props.filter(provider);
        setOpen(false)
    };

    return (
        <Modal
            open={open}
            size="tiny"
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={<Button icon><Icon name='filter' /></Button>}
        >
            <ModalHeader>Game Providers</ModalHeader>
            <ModalContent image scrolling>
                <ModalDescription>
                    <Grid>
                        <GridRow columns={3}>
                            {providerList.map((item, index) => {
                                return (
                                    <GridColumn key={index}>
                                        <Image size="small" src={item} onClick={() => handleProviderClick(item)} />
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