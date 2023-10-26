import { useState, useEffect } from "react";
import clsx from "clsx";

interface UserTableItemProps {
  item_: any;
  getChildren: any;
  removeChildren: any;
  addGeneralTable: any;
  removeGeneralTable: any;
}

const UserTableItem = ({
  item_,
  getChildren,
  removeChildren,
  addGeneralTable,
  removeGeneralTable,
}: UserTableItemProps) => {
  const [vendorSelected, setVendorSelected] = useState(false);
  const [item, setItem]: any = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (item_ !== null) {
      setItem(item_);
      setVendorSelected(item_.vendorSelected);
    }
  }, [item_]);

  return (
    <>
      {item !== null && (
        <>
          <td
            className={clsx(
              "border border-black !p-0",
              item.role !== "User" ? "w-32" : "w-20"
            )}
          >
            <div className="flex">
              <div
                className={clsx(
                  "text-black border border-black w-20 py-1.5 cursor-pointer hover:bg-orange-400",
                  vendorSelected === true ? "bg-orange-400" : "bg-white"
                )}
                onClick={() => {
                  if (!vendorSelected) addGeneralTable(item.username);
                  else removeGeneralTable(item.username, item._id);
                  item.vendorSelected = !item.vendorSelected;
                  setVendorSelected(item.vendorSelected);
                }}
              >
                Vendors
              </div>
              {item.role !== "User" && (
                <div
                  className={clsx(
                    "bg-white text-black border border-black w-16 py-1.5 cursor-pointer hover:bg-orange-400",
                    open === true ? "bg-orange-400" : ""
                  )}
                  onClick={() => {
                    if (!open) getChildren(item.username, item._id);
                    else removeChildren(item.username, item._id);
                    setOpen(!open);
                  }}
                >
                  Users
                </div>
              )}
            </div>
          </td>
          <td className="px-2 py-1 border border-black">{item.username}</td>
          <td className="px-2 py-1 border border-black">{item.role}</td>
          <td className="px-2 py-1 border border-black">15,154.94</td>
          <td className="px-2 py-1 border border-black">18,353.67</td>
          <td className="px-2 py-1 border border-black">-3,198.73</td>
        </>
      )}
    </>
  );
};

export default UserTableItem;
