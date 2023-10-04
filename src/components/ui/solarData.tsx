import { 
    ArrowUp,
    ArrowDown,
    Minus
} from "react-feather";

interface SolarProps {
    title: string,
    data: string,
    trend: 0 | 1 | 2, //0-same 1-down 2-up
    changed: number
}

const arrows = [<Minus className="text-gray-400" />, <ArrowDown className="text-red-700" />, <ArrowUp className="text-green-400" />]

const sign = ["", "-", "+"]
const colors = ["", "text-red-700", "text-green-400"]

const SolarData = ({ title, data, trend, changed }: SolarProps) => {

    return (
        <div>
            <div>{title}</div>
            <section className="flex items-center">
                <div className="text-5xl font-extrabold">{data}</div>

                {arrows[trend]}
                <div className={`${colors[trend]} text-lg`}>{sign[trend]} {changed}</div>
            </section>
        </div>
    );
}

export default SolarData;