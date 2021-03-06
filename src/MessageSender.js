import React, { useState } from 'react';
import "./MessageSender.css";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";

function MessageSender() {
    const [ input, setInput ] = useState('');
    const [ imageURL, setImageURL ] = useState('');
    const [{ user } /*dispath*/] = useStateValue();


    const handleSubmit = e => {
        e.preventDefault();

        // clever db stuff

        setInput("")
        setImageURL("")
    };

    return (
        <div className="messageSender">
            <div className="messageSender_top">
                <Avatar />
                <form>
                    <input className="messageSender_input"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                           type="text"
                           placeholder="What's on your mind?" />
                    <input className=""
                            value={imageURL}
                            onChange={e => setImageURL(e.target.value)}
                            placeholder="image URL (Optional)"
                           type="text" />
                        
                    <button onClick={ handleSubmit }
                            type="submit">
                                Hidden submit
                            </button>
                </form>
            </div>
            <div className="messageSender_bottom">
                <div className="messageSender_option">
                    <VideocamIcon style={{ color: "red" }} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender_option">
                    <PhotoLibraryIcon style={{ color: "green"}} />
                    <h3>Photo/Video</h3>
                </div>

                <div className="messageSender_option">
                    <InsertEmoticonIcon style={{ color: "orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
