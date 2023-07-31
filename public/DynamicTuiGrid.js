import React, { useEffect, useRef } from "react";
import { Grid } from "tui-grid";
import "tui-grid/dist/tui-grid.css";

function DynamicTuiGrid() {
  const gridRef = useRef(null);

  useEffect(() => {
    if (gridRef.current) {
      const grid = new Grid({
        el: gridRef.current,
        data: [
          // Your data array here
          { id: 1, name: "John Doe", age: 30 },
          { id: 2, name: "Jane Smith", age: 25 },
          // ...
        ],
        columns: [
          // Your column configurations here
          { header: "ID", name: "id", width: 50 },
          { header: "Name", name: "name", width: 150 },
          { header: "Age", name: "age", width: 50 },
          // ...
        ],
      });

      // You can handle events or do further customization here

      // Cleanup the grid instance when the component unmounts
      return () => {
        grid.destroy();
      };
    }
  }, []);

  return <div ref={gridRef} />;
}

export default DynamicTuiGrid;
