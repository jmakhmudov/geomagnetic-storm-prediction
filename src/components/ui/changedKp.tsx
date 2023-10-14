const sign = ["", "", "+"];
const colors = ["text-gray-400", "text-red-700", "text-green-400"];

interface changedProps {
    num: number
}

const ChangedKp = ({num}: changedProps) => {
    const idx = num <= 0 ? (num === 0 ? 0 : 1): 2;

    return (
        <div className={`${colors[idx]} mt-4 text-2xl`}>{sign[idx]}{num.toFixed(2)}</div>
    )
}

export default ChangedKp;