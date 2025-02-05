import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import Playlist from "./Playlist/Playlist";
import './Main.css';


const Main = () => {
    const [search, setSearch] = useState('');
    const [artists, setArtists] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/artists?name_like=${search}`)
            .then((response) => response.json())
            .then((results) => setArtists(results))
    }, [search])
    return (
        <main class="main-container">
            <Header onChange={setSearch}></Header>
            <Playlist artists={artists} search={search}></Playlist>
        </main>
    )
}

export default Main;