import { useSelector } from "react-redux";
import { selectCars } from "../../services/selectors";

const CarItem = () => {
  const cars = useSelector(selectCars);

  const extractAddressParts = (address) => {
    const parts = address.split(",").map((part) => part.trim());
    const city = parts[parts.length - 2];
    const country = parts[parts.length - 1];
    return { city, country };
  };

  return (
    <ul>
      {cars.map(
        ({
          id,
          year,
          make,
          model,
          type,
          img,
          accessories,
          rentalPrice,
          rentalCompany,
          address,
          mileage,
        }) => {
          const { city, country } = extractAddressParts(address);
          return (
            <>
              <li key={id}>
                <img alt="rent car" src={img} />
                <div>
                  {make}
                  <span>{model},</span>
                  {year}
                  <span>{rentalPrice}</span>
                </div>
                <div>
                  <span>{city}</span>
                  <span>|</span>
                  <span>{country}</span>
                  <span>|</span>
                  {rentalCompany}
                  <span>|</span>
                  <span>{type}</span>
                  <span>|</span>
                  <span>{model}</span>
                  <span>|</span>
                  <span>{mileage}</span>
                  <span>|</span>
                  <span>{accessories[accessories.length - 3]}</span>
                </div>
              </li>
              <button type="button">Learn more</button>
            </>
          );
        }
      )}
    </ul>
  );
};
export default CarItem;
