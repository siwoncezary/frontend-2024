"use client";
function FlexDemo() {
  const onClick = (e) => {
    console.log(e.target);
  };
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div
      className="
        container 
        m-auto 
        w-48 
        border
        p-6 
        bg-red-400"
    >
      <div
        className="
        bg-orange-300
        flex
        flex-row
        h-60
        flex-wrap
        gap-3
        justify-center
        content-evenly
        "
        onClick={onClick}
      >
        {arr.map((i, index) => (
          <div
            key={index}
            className="item">
            {index}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FlexDemo;
