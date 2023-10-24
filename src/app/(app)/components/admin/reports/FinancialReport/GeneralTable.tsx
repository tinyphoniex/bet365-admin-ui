import { useState, useEffect } from "react";
import clsx from "clsx";

interface GeneralTableProps {
  financialReportData: any;
}

const GeneralTable = ({
  financialReportData,
}: GeneralTableProps) => {
  const [IN, setIN] = useState(0);
  const [out, setOut] = useState(0);
  const [ggr, setGGR] = useState(0);
  const [share, setShare] = useState(0);
  const [bonus, setBonus] = useState(0);
  const [converted, setConverted] = useState(0);
  const [ngr, setNGR] = useState(0);
  const [open, setOpen] = useState(0);
  const [sumOpen, setSumOpen] = useState(0);

  const [financialData, setFinancialData] = useState(null);

  useEffect(() => {
    if (
      financialReportData.slots !== undefined &&
      financialReportData.slots.length > 0
    ) {
      setFinancialData(financialReportData);
      setIN(financialReportData.slots[0].overallTotal[0].total_in);
      setOut(financialReportData.slots[0].overallTotal[0].total_out);
      setGGR(financialReportData.slots[0].overallTotal[0].ggr);
    }
  }, [financialReportData]);

  return (
    <table className="w-full text-sm text-white text-center">
      <thead className="text-sm bg-[#222] uppercase">
        <tr>
          <th scope="col" className="py-1.5 border border-black"></th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            in
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            out
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            ggr
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            share
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            bonus
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            converted
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            ngr
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            open
          </th>
          <th scope="col" className="px-2 py-1.5 border border-black">
            sum open
          </th>
        </tr>
      </thead>
      <tbody>
        {financialData !== null &&
          financialData.slots !== undefined &&
          financialData.slots.length > 0 && (
            <tr className="bg-brand-dark-grey">
              <td className="px-2 py-1 border border-black">
                {financialData.slots[0].totalsPerSlot.length > 1
                  ? "+ SLOTS"
                  : "SLOTS"}
              </td>
              <td className="px-2 py-1 border border-black">{IN.toFixed(2)}</td>
              <td className="px-2 py-1 border border-black">
                {out.toFixed(2)}
              </td>
              <td
                className={clsx(
                  "px-2 py-1 border border-black",
                  ggr === 0
                    ? "bg-brand-dark-grey"
                    : ggr > 0
                    ? "bg-brand-plus-cell"
                    : "bg-brand-minus-cell"
                )}
              >
                {ggr.toFixed(2)}
              </td>
              <td className="px-2 py-1 border border-black">{share}</td>
              <td className="px-2 py-1 border border-black">{bonus}</td>
              <td
                className={clsx(
                  "px-2 py-1 border border-black",
                  converted !== 0 ? "bg-brand-plus-cell" : ""
                )}
              >
                {converted}
              </td>
              <td className="px-2 py-1 border border-black">{ngr}</td>
              <td className="px-2 py-1 border border-black">{open}</td>
              <td className="px-2 py-1 border border-black">{sumOpen}</td>
            </tr>
          )}
      </tbody>
    </table>
  );
};

export default GeneralTable;

const general_table = [
  {
    name: "PRE",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
  {
    name: "LIVE",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
  {
    name: "SLOTS",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
  {
    name: "CASINO",
    in: "0.00",
    out: "0.00",
    ggr: "0.00",
    share: "0%",
    bonus: "0.00",
    converted: "0.00",
    ngr: "0.00",
    open: "0",
    sum_open: "0.00",
  },
];
