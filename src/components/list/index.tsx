import React, { useState, useEffect } from "react";
import { DivStyledList } from "./styled";
import { Card } from "../card";
import { api } from "../../service";

interface Root {
  descriptionShort: string;
  photo: string;
  price: number;
  productName: string;
}

export const List = () => {
  const [data, setData] = useState<Root[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;

  const capturingData = async () => {
    const response: any = await api.get("");
    setData(response.data.products);
  };

  useEffect(() => {
    capturingData();
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <DivStyledList>
      <div className="line">
        <h2>Produtos relacionados</h2>
      </div>
      <div className="div-buttons">
        <button>CELULAR</button>
        <button>ACESSÓRIOS</button>
        <button>TABLETS</button>
        <button>NOTEBOOK</button>
        <button>TVS</button>
        <button>VER TODOS</button>
      </div>
      <div className="list">
        <button onClick={handlePrevPage} className="button-left">
          {"<"}
        </button>
        <ul>
          {currentData.map((element) => (
            <Card key={element.productName} {...element} />
          ))}
        </ul>
        <button onClick={handleNextPage} className="button-right">
          {">"}
        </button>
      </div>
    </DivStyledList>
  );
};
