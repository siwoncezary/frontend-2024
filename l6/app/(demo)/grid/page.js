'use client'
function GridDemo() {
    const onClick = (e) => {
        console.log(e.target)
    }
    const arr = [1,1,1,1,1,1,1,1, 1, 1, ];
    return ( 

    <div className="container m-auto w-1/3">
        <div className="grid grid-cols-4 grid-flow-row gap-4 hover:gap-6" onClick={onClick}>
            {arr.map((i, index) => <div key={index} className="rounded-md bg-gray-500 flex items-center justify-center text-center hover:bg-red-600">{index}</div>)}
            <div className="col-span-2 rounded-md bg-gray-500 flex items-center justify-center text-center hover:bg-red-600">10</div>
            <div className="col-span-3 row-span-2 rounded-md bg-gray-500 flex items-center justify-center text-center hover:bg-red-600">11</div>
            <div className="rounded-md bg-gray-500 flex items-center justify-center text-center hover:bg-red-600">12</div>
            <div className="rounded-md bg-gray-500 flex items-center justify-center text-center hover:bg-red-600">13</div>
        </div>
    </div> 
    );
}

export default GridDemo;