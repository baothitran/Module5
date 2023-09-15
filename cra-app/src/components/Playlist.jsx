import { useState } from "react";

function Playlist() {
    const [listSong, setListSong] = useState([
        "Mân côi", "Chuyện của ta", "Người và ta"
    ])
    const [songName, setSongName] = useState('')

    const handleAddSong = (e) => {
        e.preventDefault();
        setListSong([
            ...listSong,
            songName
        ])
        setSongName('')
    }
    const handleRemoveSong = (songRemove) => {
        let confirm = window.confirm(`Are you sure to delete ${songRemove}?`)
        if (!confirm) return;

        setListSong((prev) => {
            let newListSong = prev.filter((song) => song != songRemove)
            return newListSong
        })
    }

    const handleEditSong = (songEdit) => {
        let newSongName = prompt('Nhập tên: ', songEdit);
        if (newSongName != null) {
            setListSong((prev) =>
                prev.map((item) => {
                    if (item === songEdit) {
                        return newSongName;
                    }
                    return item;
                })
            );
        }
    };


    return (
        <div className=" d-flex justify-content-center">

            <div className="row col-md-6">
                <h2 className="text-info text-center fs-1 fw-bold">NhacCuaThi</h2>
                <form onSubmit={handleAddSong}>
                    <div className="form-group d-flex align-items-center my-3">
                        <input type="text" className="form-control me-2"
                            onInput={(e) => setSongName(e.target.value)}
                            value={songName}
                        />
                        <button className="btn btn-outline-info">Add</button>
                    </div>
                </form>
                <ul className="list-group my-2">
                    {
                        listSong.map((song, index) => (
                            <li key={index} className="list-group-item list-group-item-action list-group-item-info d-flex justify-content-between mt-2">
                                {song}
                                <div>
                                    <span role="button" className="fw-bolder mx-2" onClick={() => handleRemoveSong(song)}>
                                        <i class="fa-solid fa-delete-left"></i>
                                    </span>
                                    <span role="button" className="fw-bolder" onClick={() => handleEditSong(song)}>
                                        <i class="fa-regular fa-pen-to-square"></i>
                                    </span>
                                </div>

                            </li>
                        ))
                    }
                </ul>
                
            </div>

        </div>
    )

}

export default Playlist;