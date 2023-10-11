import { useState } from "react";

import { useModalContext } from "@/contexts/ModalContext";
import LeagueTableItem from "./LeagueTableItem";
import ModalTransalte from "@/components/ui/ModalDialog/ModalTranslate";

interface LeagueTableProps {
  tableList: Array<any>;
  currentPage: number;
}

const LeagueTable = ({ tableList, currentPage }: LeagueTableProps) => {
  const { openTranslateModal } = useModalContext();
  const [selectedName, setSelectedName] = useState("");

  return (
    <>
      <section className="pt-4 w-full overflow-scroll md:overflow-hidden">
        {tableList?.length === 0 ? (
          <p className="text-lg font-bold text-center text-brand-button-text">
            No results
          </p>
        ) : (
          <table className="w-full text-sm text-gray-400 text-center">
            <thead className="text-sm bg-brand-yellow text-black">
              <tr>
                <th scope="col" className="px-2 py-1.5 border border-gray-600 truncate">
                  Sport
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600 truncate">
                  Country
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600 truncate">
                  League Default Name
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600 truncate">
                  League ID
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600 truncate">
                  Order
                </th>
                <th scope="col" className="px-2 py-1.5 border border-gray-600 truncate">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableList.map((item: any, index: number) => {
                if (index >= currentPage * 5 && index < (currentPage + 1) * 5)
                  return (
                    <LeagueTableItem
                      key={index}
                      item={item}
                      onHandleTranslateClick={(name: string) => {
                        setSelectedName(name);
                        openTranslateModal();
                      }}
                    />
                  );
              })}
            </tbody>
          </table>
        )}
      </section>
      <ModalTransalte name={selectedName} />
    </>
  );
};

export default LeagueTable;
