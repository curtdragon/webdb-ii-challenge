
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([

        { "VIN": "1N6AA0EC0FN957743", "Make": "Lotus", "Model": "Esprit", "Mileage": 190607 },
        { "VIN": "1FTSX2A58AE005782", "Make": "Dodge", "Model": "Dakota", "Mileage": 263600 },
        { "VIN": "2C3CCAGG8CH401474", "Make": "Ford", "Model": "F350", "Mileage": 280885 },
        { "VIN": "19UUA9F73EA235020", "Make": "BMW", "Model": "5 Series", "Mileage": 346159 },
        { "VIN": "WBABW33445P246729", "Make": "Dodge", "Model": "Ram", "Mileage": 275506 },
        { "VIN": "WAULT58E75A262808", "Make": "Studebaker", "Model": "Avanti", "Mileage": 345525 },
        { "VIN": "3G5DB03EX3S358178", "Make": "Ford", "Model": "E-Series", "Mileage": 79212 },
        { "VIN": "JN1CV6EK7AM300577", "Make": "Acura", "Model": "RL", "Mileage": 139017 },
        { "VIN": "SAJWA4DC7DM805089", "Make": "Pontiac", "Model": "Firebird", "Mileage": 332189 },
        { "VIN": "WAUMF68P76A640923", "Make": "Subaru", "Model": "Impreza", "Mileage": 156660 },
        { "VIN": "4USFE83527L644202", "Make": "Kia", "Model": "Rio", "Mileage": 283967 },
        { "VIN": "JTDJTUD34ED809282", "Make": "Ferrari", "Model": "599 GTB Fiorano", "Mileage": 131719 },
        { "VIN": "3D73M3HL3AG360948", "Make": "Porsche", "Model": "911", "Mileage": 221230 },
        { "VIN": "WBAUN13538V232894", "Make": "Isuzu", "Model": "Space", "Mileage": 227262 },
        { "VIN": "WDDJK7DA9EF287665", "Make": "Nissan", "Model": "Versa", "Mileage": 222934 },
        { "VIN": "2HNYD2H69CH426680", "Make": "Bentley", "Model": "Continental GT", "Mileage": 256873 },
        { "VIN": "WBA3N5C59FK348358", "Make": "Chrysler", "Model": "Sebring", "Mileage": 210222 },
        { "VIN": "3VW517AT3EM086586", "Make": "Mazda", "Model": "CX-7", "Mileage": 96580 },
        { "VIN": "WAUSF78E98A809709", "Make": "Chevrolet", "Model": "Silverado 2500", "Mileage": 222580 },
        { "VIN": "WAUEFAFL2CA026929", "Make": "Audi", "Model": "A8", "Mileage": 287258 }
      ]);
    });
};
