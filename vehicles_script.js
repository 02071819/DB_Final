db.getCollection("vehicles").find(
{
Age_of_Driver: { $gt: 30 },
Sex_of_Driver: { $eq: 1 }
}
)

