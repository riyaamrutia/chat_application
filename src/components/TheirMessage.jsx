const TheirMessage = ({ lastMessage, message }) => {
    //if this msg is first msg from the user or not

    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;
    //above line will give a bool value if the msg is first msg sent by user or not


    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="message-avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}

                    />
                ) : (
                    <div className="message" style={{ float: 'left',  backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser? '4px' : '48px' }}>
                        {message.text}
                    </div>
                )
            }

        </div>
    );
}

export default TheirMessage;