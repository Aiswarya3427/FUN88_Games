import React, { useState } from 'react';
import axios from 'axios';
import { GridColumn, Grid, Image, GridRow, Button, Icon } from 'semantic-ui-react';
import Provider from '../Provider/Provider';
import Favorites from '../Favorites/Favorites';

export default function Games(props) {

    const [data, setData] = React.useState([]);
    const [setError] = React.useState([]);
    const [filterData, setFilterData] = React.useState([]);
    const [query, setQuery] = useState([]);
    const [favoriteItems, setFavoriteItems] = useState([]);

    React.useEffect(() => {
        let imageData = []
        let filterData = []
        Promise.resolve(
            axios.get('../Game-list.json')
                .then(res => {
                    imageData = res.data
                    setData(imageData)
                    setFilterData(filterData)
                })
                .catch(err => {
                    setError(err.message);
                    console.log("Something went Wrong!", err);
                })
        );

    }, []);
    const handleSearch = (event) => {
        const value = event.target.value;
        setQuery(value);

        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(value.toLowerCase())
        );

        setFilterData(filtered);
    }
    const providerFilter = (providerData) => {
        setFilterData(providerData)
    }
    const removeFavorites = (unselectedItem) => {
        if (favoriteItems) {
            setFavoriteItems(favoriteItems.filter(item => item.id !== unselectedItem.id));
            document.getElementById("addButton" + unselectedItem.id).disabled = false;
        }
    }
    const addFavorites = (selectedItem) => {
        setFavoriteItems((oldItems) => [...oldItems, selectedItem]);
        document.getElementById("addButton" + selectedItem.id).disabled = true;
    }

    return (
        <div>
            {props.searchData ? (
                <div>
                    <input
                        type="text"
                        placeholder='="Search...'
                        value={query}
                        onChange={handleSearch}
                    />
                    <Provider providerData={data} filter={providerFilter} />
                    <Grid>
                        <GridRow columns={3}>
                            {filterData.map((item) => {
                                return (
                                    <Image src={item.src} />
                                )
                            })}
                        </GridRow>
                    </Grid>
                </div>
            ) :
                <Grid>
                    <GridRow columns={3}>
                        {data.map(function(item) {
                            if (props.category === "Home") {
                                return (
                                    <GridColumn key={item.id}>
                                        <Button id={"addButton" + item.id} style={{ backgroundColor: "beige" }} icon><Icon name='like' style={{ color: "green" }} onClick={() => addFavorites(item)} /></Button>
                                        <Button id={"delButton" + item.id} style={{ backgroundColor: "beige" }} icon><Icon name='trash' style={{ color: "red" }} onClick={() => removeFavorites(item)} /></Button>
                                        <Image src={item.src} />
                                        <br></br>
                                    </GridColumn>
                                )
                            }
                            else if (item.category === props.category) {
                                return (
                                    <GridColumn key={item.id}>
                                        <Button id={"addButton" + item.id} style={{ backgroundColor: "beige" }} icon><Icon name='like' style={{ color: "green" }} onClick={() => addFavorites(item)} /></Button>
                                        <Button id={"delButton" + item.id} style={{ backgroundColor: "beige" }} icon><Icon name='trash' style={{ color: "red" }} onClick={() => removeFavorites(item)} /></Button>
                                        <Image src={item.src} />
                                    </GridColumn>
                                )
                            }

                        })}

                    </GridRow>
                </Grid>

            }
            <GridRow columns={3}>
                <GridColumn style={{ float: "left" }}>
                    <Favorites selectedGames={favoriteItems} />
                </GridColumn>
                <GridColumn style={{ float: "left" }}>
                    <Button icon style={{ color: 'black', backgroundColor: 'white' }}><Icon name='user' /> USER</Button>
                </GridColumn>
                <GridColumn style={{ float: "left" }}>
                    <Button icon style={{ color: 'black', backgroundColor: 'white' }}><Icon name='settings' /> SETTINGS</Button>
                </GridColumn>
            </GridRow>
        </div>

    )
}