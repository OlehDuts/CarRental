if (Cars.find().count() === 0 && Cities.find().count() === 0) {

  Cities.insert({
    city: 'Lviv'
  });

  Cities.insert({
    city: 'Kiev'
  });

  Cities.insert({
    city: 'Rivne'
  });

  Cars.insert({
    brand: 'Mercedes',
    model: 'G500',
    year: '2015',
    city: [Cities.findOne({city: 'Lviv'})._id],
    userName: '111'
  });

  Cars.insert({
    brand: 'Chrysler',
    model: '300',
    year: '2013',
    city: [Cities.findOne({city: 'Kiev'})._id, Cities.findOne({city: 'Lviv'})._id],
  });

  Cars.insert({
    brand: 'Honda',
    model: 'Accord',
    year: '2014',
    city: [Cities.findOne({city: 'Kiev'})._id,Cities.findOne({city: 'Rivne'})._id],
  });
}