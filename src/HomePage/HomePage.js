import React, { Component } from 'react';
import { GridColumn, Grid, Image, GridRow, MenuMenu } from 'semantic-ui-react';
import { MenuItem, Menu, Icon } from 'semantic-ui-react';
import { Divider, Header, Segment } from 'semantic-ui-react';
import Carousel from 'react-material-ui-carousel'
import Games from '../components/Games/Games';
import { Paper } from '@mui/material'

export default class HomePage extends Component {

    state = { activeItem: 'Home', isSearch: false }
    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        if (name === "Search") {
            this.setState({ isSearch: true })
        } else if (this.state.isSearch) {
            this.setState({ isSearch: false })
        }
    }
    Item(props) {
        return (
            <Paper>
                <Image src={props.item.url} style={{ width: "100%" }} />
            </Paper>
        )
    }
    render() {
        const { activeItem, isSearch } = this.state
        const carouselItems = [
            {
                name: "Online Game",
                url: "/images/Online-Games.png"
            },
            {
                name: "Crazy Times",
                url: "/images/crazyTime.png"
            }
        ]
        return (

            <div>
                <React.Fragment>
                    <Segment>
                        <Header as='h3'>
                            <Menu pointing secondary>
                                <MenuItem
                                    name='appName'
                                    active={activeItem === 'appName'}
                                    onClick={this.handleItemClick}
                                >
                                    <Icon name='braille' style={{ fontSize: '22px', marginLeft: '-15px', color: 'deepskyblue' }} />
                                    <h5 style={{ fontSize: '20px', marginTop: '0px', color: 'deepskyblue' }}>FUN88</h5>
                                </MenuItem>
                                <MenuMenu position='right' style={{ marginRight: '-95px' }}>
                                    <MenuItem
                                        name='wallet'
                                        active={activeItem === 'wallet'}
                                        onClick={this.handleItemClick}
                                    >
                                        <Icon name='money' style={{ fontSize: '22px' }} />
                                        <h5 style={{ fontSize: '20px', marginTop: '0px', color: 'deepskyblue' }}>$1990.6</h5>
                                    </MenuItem>
                                </MenuMenu>

                                <MenuMenu position='right' style={{ marginRight: '-20px' }}>
                                    <MenuItem
                                        name='user'
                                        active={activeItem === 'user'}
                                        onClick={this.handleItemClick}
                                    >
                                        <Icon name='user' style={{ fontSize: '18px', marginLeft: '10px', marginBottom: '4px', color: 'deepskyblue' }} />
                                    </MenuItem>
                                </MenuMenu>
                            </Menu>
                        </Header>

                        <Divider hidden />

                        <Header as='h3'>
                            <Carousel>
                                {
                                    carouselItems.map((item, i) => <this.Item key={i} item={item} />)
                                }
                            </Carousel>
                        </Header>

                        <Divider hidden />
                        <Menu icon='labeled' pointing secondary>
                            <Grid columns='equal'>
                                <GridRow>
                                    <GridColumn width={2}>
                                        <MenuItem
                                            name='Search'
                                            active={activeItem === 'Search'}
                                            onClick={this.handleItemClick}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <Icon name='search' />
                                            SEARCH
                                        </MenuItem>
                                    </GridColumn>
                                    <GridColumn width={2}>
                                        <MenuItem
                                            name='Home'
                                            active={activeItem === 'Home'}
                                            onClick={this.handleItemClick}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <Icon name='home' />
                                            HOME
                                        </MenuItem>
                                    </GridColumn>
                                    <GridColumn width={2}>
                                        <MenuItem
                                            name='Start'
                                            active={activeItem === 'Start'}
                                            onClick={this.handleItemClick}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <Icon name='fire' />
                                            START
                                        </MenuItem>
                                    </GridColumn>
                                    <GridColumn width={2}>
                                        <MenuItem
                                            name='New'
                                            active={activeItem === 'New'}
                                            onClick={this.handleItemClick}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <Icon name='fort awesome' />
                                            NEW
                                        </MenuItem>
                                    </GridColumn>
                                    <GridColumn width={2}>
                                        <MenuItem
                                            name='Slots'
                                            active={activeItem === 'Slots'}
                                            onClick={this.handleItemClick}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <Icon name='snowflake' />
                                            SLOTS
                                        </MenuItem>

                                    </GridColumn>
                                    <GridColumn width={2}>
                                        <MenuItem
                                            name='Live'
                                            active={activeItem === 'Live'}
                                            onClick={this.handleItemClick}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <Icon name='tv' />
                                            LIVE
                                        </MenuItem>
                                    </GridColumn>
                                    <GridColumn width={2}>
                                        <MenuItem
                                            name='Jackpot'
                                            active={activeItem === 'Jackpot'}
                                            onClick={this.handleItemClick}
                                            style={{ fontSize: '10px' }}
                                        >
                                            <Icon name='money bill alternate outline' />
                                            JACKPOT
                                        </MenuItem>
                                    </GridColumn>
                                </GridRow>
                            </Grid>
                        </Menu>

                        <Divider section />

                        <Header as='h3'>
                            <Games category={activeItem} searchData={isSearch} />
                        </Header>

                        <Divider section />
                    </Segment>
                </React.Fragment>
            </div>


        )
    }
}