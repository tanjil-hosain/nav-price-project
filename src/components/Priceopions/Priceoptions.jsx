import Priceoption from "./Priceoption/Priceoption";


const Priceoptions = () => {
  const priceOption=  [
        {
          "id": 1,
          "name": "Smartphone",
          "price": 499.99,
          "features":[ "High-Resolution Display","Touchscreen Interface","4G Connectivity"]
        },
        {
          "id": 2,
          "name": "Laptop",
          "price": 899.99,
          "features":[ "High-Resolution Display","Touchscreen Interface","4G Connectivity"]
        },
        {
          "id": 3,
          "name": "Tablet",
          "price": 299.99,
          "features": [ "High-Resolution Display","Touchscreen Interface","4G Connectivity","High-Resolution Display","High-Resolution Display","High-Resolution Display"]
        }
      ]
      
    return (
        <div className="grid grid-cols-3 gap-6">
            {
                priceOption.map((priceoption)=><Priceoption key={priceoption.id} priceoption={priceoption}></Priceoption>)
            }
        </div>
    );
};

export default Priceoptions;