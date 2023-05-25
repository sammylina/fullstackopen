export default function Notification({notification: {msg, color}}) {
    const success = {
        color,
        border: 'solid',
        background: 'lightgrey',
        borderRadius: 5,
        borderWidth: 3,
        padding: 5,
        fontSize: 22,
        marginBottom: 5,
    }
    if (msg === null) {
        return null;
    }
    return (
        <div style={success}>
            {msg}
        </div>
    )
}