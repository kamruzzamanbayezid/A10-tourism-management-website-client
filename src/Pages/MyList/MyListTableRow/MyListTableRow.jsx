import PropTypes from 'prop-types';

const MyListTableRow = ({ touristSpot }) => {


      const { _id, image, spotName, location, averageCost, seasonality, travelTime, totalVisitorsPerYear, description, name } = touristSpot || {};

      return (
            <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                  <td className="p-3">
                        <p className='text-sm lg:text-lg text-[#666]'>{spotName}</p>
                  </td>
                  <td className="p-3">
                        <p className='text-sm lg:text-lg text-[#666]'>{travelTime}</p>
                  </td>
                  <td className="p-3">
                        <p className='text-sm lg:text-lg text-[#666]'>${averageCost}</p>
                  </td>
                  <td className="p-3">
                        <p className="text-sm lg:text-lg dark:text-gray-600 text-[#666]">{seasonality}</p>
                  </td>

                  <td className="p-3 text-right text-[#666]">
                        <span className='text-[#666]'>Pending</span>
                  </td>
            </tr>

      );
};

MyListTableRow.propTypes = {
      touristSpot: PropTypes.object
};

export default MyListTableRow;