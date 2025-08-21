import apiData from "../api/apiData.json";
import { Card } from "./Card";

export const SeriesCards = () => {
    return <ul className="flex flex-col gap-6 bg-gray-950 p-6 rounded-2xl">
        {apiData.map((curEl) => 
         <Card key={curEl.id} data={curEl} />
        )}
    </ul>
}