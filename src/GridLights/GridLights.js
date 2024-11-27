import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const GridLights = ()=> {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [grid, setGrid] = useState([
        {
            id : 0,
            selected : false,
            selectedIndex : null,
        },
        {
            id : 1,
            selected : false,
            selectedIndex : null,
        }, {
            id : 2,
            selected : false,
            selectedIndex : null,
        }, {
            id : 3,
            selected : false,
            selectedIndex : null,
        }, {
            id : 4,
            selected : false,
            selectedIndex : null,
        }, {
            id : 5,
            selected : false,
            selectedIndex : null,
        }, {
            id : 6,
            selected : false,
            selectedIndex : null,
        }, {
            id : 7,
            selected : false,
            selectedIndex : null,
        }, {
            id : 8,
            selected : false,
            selectedIndex : null,
        }
    ])

    const handleCellSelectChange = (object) => {
        setGrid((prev) => {
            const updatedGrid = prev.map((e) => {
                if (e.id === object.id) {
                    return {
                        ...e,
                        selected: true,
                        selectedIndex: selectedIndex,
                    };
                }
                return e;
            });

            const isEverySelected = updatedGrid.every((obj) => obj.selected === true);

            if (isEverySelected) {
                const sortedList = [...updatedGrid].sort(
                    (a, b) => b.selectedIndex - a.selectedIndex
                );
                reverseUnselectOneByOne(sortedList, 0);
                setSelectedIndex(0);
            }

            return updatedGrid;
        });

        setSelectedIndex((prev) => prev + 1);
    };

    const reverseUnselectOneByOne = (sortedGrid, index) => {
        if (index >= sortedGrid.length) return;

        setGrid((prevGrid) =>
            prevGrid.map((item) =>
                item.selectedIndex === sortedGrid[index].selectedIndex
                    ? { ...item, selected: false }
                    : item
            )
        );

        setTimeout(() => {
            reverseUnselectOneByOne(sortedGrid, index + 1);
        }, 500);
    };



return (<>
    <div style={{position:"absolute", margin:"20px", cursor:"pointer"}} onClick={()=> navigate("/")}>
        {"<- back"}
    </div>
    <div style={{ width: "100vw", height:"100vh", backgroundColor: "#e364fa", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div style={{backgroundColor: "white", height:"700px", width:"700px", borderRadius:"16px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
            {grid.map((obj, i) => (
                <div style={{height:"100%", width:"100%", backgroundColor: `${obj.selected === true ? "black" : "grey"}`, border:"1px solid white"}} onClick={() => handleCellSelectChange(obj)}>
                </div>
            ))}

        </div>
    </div>
</>)
}

 export default GridLights;