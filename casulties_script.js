db.getCollection("casulties").aggregate([
  {
    $match: {
      "Age_of_Casualty": { $gt: 40 },
      "Casualty_Severity": 3
    }
  },
  {
    $group: {
      _id: "Age_of_Casualty",
      Num_Casualty_Severity: { $sum: 1 }
    }
  }
])
