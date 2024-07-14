import Property from "../schema/form-schema.js";

// Controller function to create a new property
const createProperty = async (req, res) => {
  const { formData, options } = req.body;

  try {
    // Extract data from formData
    const {
      status,
      propertyType,
      price,
      area,
      plotArea,
      bedroom,
      transaction,
      furnishing,
      propertyAge,
      flatNo,
      propertyName,
      buildingName,
      street,
      landmark,
      pinCode,
      address,
      city,
      location,
      description,
      amenities,
    } = formData;

    // Extract amenities' values from options
    const selectedAmenities = options.map((option) => option.value);

    // Create a new Property instance with extracted data
    const newProperty = new Property({
      status,
      propertyType,
      price: Number(price),
      area: Number(area),
      plotArea: Number(plotArea),
      bedroom: Number(bedroom),
      transaction,
      furnishing,
      propertyAge,
      flatNo,
      propertyName,
      buildingName,
      street,
      landmark,
      pincode: pinCode,
      address,
      city,
      location,
      detailedInformation: description,
      amenities: selectedAmenities,
    });

    // Save the new property to the database
    const savedProperty = await newProperty.save();

    // Respond with the saved property object
    res.status(201).json(savedProperty);
  } catch (err) {
    // Handle any errors that occur during the save operation
    res.status(400).json({ message: err.message });
  }
};

export default createProperty;
