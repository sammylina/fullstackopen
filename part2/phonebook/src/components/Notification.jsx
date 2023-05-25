export default function Notification({message}) {
    const success = {
        color: 'green',
        border: 'solid',
        background: 'lightgrey',
        borderRadius: 5,
        borderWidth: 3,
        padding: 5,
        fontSize: 22,
        marginBottom: 5,
    }
    if (message === null) {
        return null;
    }
    return (
        <div style={success}>
            {message}
        </div>
    )
}