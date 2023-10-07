"use client";
import { useState } from "react";
import clsx from "clsx";
import { Modal } from "antd";
import { useModalContext } from "@/contexts/ModalContext";
import ModalCoupon from "../../reports/BetsList/ModalCoupon";

function ModalSearchCoupon({ item }: any) {
  const { isSearchCouponModalOpen, closeSearchCouponModal, openCouponModal } =
    useModalContext();
  const [betType, setBetType] = useState("All");

  return (
    <>
      <Modal
        className="modal-search-coupon"
        title="Ceara SC - Londrina EC PR"
        open={isSearchCouponModalOpen}
        onCancel={closeSearchCouponModal}
        footer={[
          <div key="close" className="flex justify-center">
            <button
              className="px-4 py-1.5 rounded-md bg-brand-dialog-button"
              onClick={closeSearchCouponModal}
            >
              Close
            </button>
          </div>,
        ]}
      >
        <section className="px-4">
          <section className="flex flex-col gap-2 bg-brand-dialog items-start pt-4">
            <div className="flex flex-col">
              <p className="text-sm text-white">Bet Type:</p>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 w-24 text-xs rounded-sm block focus:ring-0 focus:border-gray-300"
                onChange={(e) => setBetType(e.target.value)}
              >
                <option value="All">All</option>
              </select>
            </div>
            {item !== null && (
              <section className="w-full overflow-x-scroll md:overflow-hidden">
                <table className="w-full text-sm text-gray-400 text-center">
                  <thead className="text-sm bg-brand-yellow text-black">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-1.5 border border-gray-600"
                      >
                        User
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1.5 border border-gray-600"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1.5 border border-gray-600"
                      >
                        Coupon Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1.5 border border-gray-600"
                      >
                        Game Status
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1.5 border border-gray-600"
                      >
                        Bet Type
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1.5 border border-gray-600"
                      >
                        Bet
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-1.5 border border-gray-600"
                      >
                        Win
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#777] text-white text-xs">
                    <tr className="bg-[#333]">
                      <td className="px-2 py-1 border border-gray-600">
                        Total: 36
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        Open: 9
                      </td>
                      <td className="px-2 py-1 border border-gray-600"></td>
                      <td className="px-2 py-1 border border-gray-600">
                        Average: 4.87
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        Pos.Win.: 1057.71
                      </td>
                      <td className="px-2 py-1 border border-gray-600">
                        175.45
                      </td>
                      <td className="px-2 py-1 border border-gray-600">5.11</td>
                    </tr>
                    {item.map((item: any, index: number) => {
                      return (
                        <tr key={index} className="cursor-pointer" onClick={openCouponModal}>
                          <td className="px-2 py-1 border border-gray-600">
                            {item.user}
                          </td>
                          <td className="px-2 py-1 border border-gray-600">
                            {item.date}
                          </td>
                          <td
                            className={clsx(
                              "px-2 py-1 border border-gray-600",
                              item.coupon_status === "Won" && "bg-green-700",
                              item.coupon_status === "Lost" && "bg-brand-red"
                            )}
                          >
                            <p>coupon id: {item.id}</p>
                            <p>{item.coupon_status}</p>
                          </td>
                          <td className="px-2 py-1 border border-gray-600">
                            {item.game_status}
                          </td>
                          <td className="px-2 py-1 border border-gray-600">
                            <p>Match Result (3-ways)</p>
                            <p>1</p>
                          </td>
                          <td className="px-2 py-1 border border-gray-600">
                            {item.bet}
                          </td>
                          <td className="px-2 py-1 border border-gray-600">
                            {item.win}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </section>
            )}
          </section>
        </section>
      </Modal>
      <ModalCoupon item={item} />
    </>
  );
}

export default ModalSearchCoupon;
