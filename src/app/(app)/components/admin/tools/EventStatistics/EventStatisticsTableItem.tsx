interface EventStatisticsTableItemProps {
  item: any;
  onHandleStatisticsClick: any;
}

const EventStatisticsTableItem = ({ item, onHandleStatisticsClick }: EventStatisticsTableItemProps) => {
  return (
    <tr className="text-white bg-[#777]">
      <td className="px-2 py-1 border border-gray-600">{item.sport}</td>
      <td className="px-2 py-1 border border-gray-600">{item.country}</td>
      <td className="px-2 py-1 border border-gray-600">{item.league}</td>
      <td className="px-2 py-1 border border-gray-600">{item.start_date}</td>
      <td className="px-2 py-1 border border-gray-600">{item.games}</td>
      <td className="w-48 border border-gray-600">
        <div className="flex gap-0.5">
          <button className="button py-2 bg-green-700 hover:bg-green-600 w-full"
            onClick={() => onHandleStatisticsClick(item)}
          >
            {"Statistics (" + item.status + ")"}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default EventStatisticsTableItem;
