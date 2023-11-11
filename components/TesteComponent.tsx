export default function TesteComponent({ setCursorVariant }:any) {
    return (
      <div>
        <div
          className="w-[500px] h-[500px] bg-red-100"
          onMouseEnter={() => {
            setCursorVariant("imgCursor");
          }}
          onMouseLeave={() => {
            setCursorVariant("default");
          }}
        />

        <div className="w-[500px] h-[500px] bg-yellow-200"></div>
      </div>
    );
  }