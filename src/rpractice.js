const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your first name: ", function(firstName) {
    rl.question("Enter your last name: ", function(lastName) {
        rl.question("Enter your city: ", function(city) {
            rl.question("Enter your postcode: ", function(postcode) {
                console.log("Full Name:", firstName + " " + lastName);
                console.log("City:", city);
                console.log("Postcode:", postcode);

                rl.question("Do you want to save this information? (yes/no): ", function(answer) {
                    if (answer.toLowerCase() === "yes") {
                        const patientData = {
                            firstName: firstName,
                            lastName: lastName,
                            city: city,
                            postcode: postcode
                        };

                        const jsonData = JSON.stringify(patientData);

                        fs.appendFile('patientData.json', jsonData + '\n', function(err) {
                            if (err) {
                                console.error('Error saving data:', err);
                            } else {
                                console.log('Data saved successfully!');
                            }
                            rl.close();
                        });
                    } else {
                        rl.close();
                    }
                });
            });
        });
    });
});
