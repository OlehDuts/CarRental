if (Cars.find().count() === 0 && Cities.find().count() === 0) {

  Cars.insert({
    brand: 'Mercedes',
    model: 'G500',
    year: '2015',
    city: 'Lviv',
    user_id: []
  });

  Cars.insert({
    brand: 'Chrysle',
    model: '300',
    year: '2013',
    city: 'Lviv',
     user_id: []
  });

  Cars.insert({
    brand: 'Honda',
    model: 'Accord',
    year: '2014',
    city: 'Kiev',
    user_id: []
  });

  Cities.insert({
    '_id': 'Lviv',
    'cars': [Cars.findOne({brand: 'Mercedes'})._id],
    city: 'Lviv',
    });
  Cities.insert({
    '_id': 'Kiev',
    'cars': [],
    city: 'Kiev'
    });
  Cities.insert({
    '_id': 'Rivne',
    'cars': [],
    city: 'Rivne'
    });
}