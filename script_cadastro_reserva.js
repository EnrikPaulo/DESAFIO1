document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var plate = document.getElementById('plate').value;
    var ownerName = document.getElementById('ownerName').value;
    var apartmentNumber = document.getElementById('apartmentNumber').value;
    var apartmentBlock = document.getElementById('apartmentBlock').value;
    var vehicleModel = document.getElementById('vehicleModel').value;
    var vehicleColor = document.getElementById('vehicleColor').value;
    var parkingNumber = document.getElementById('parkingNumber').value;

    var reservation = {
        plate: plate,
        ownerName: ownerName,
        apartmentNumber: apartmentNumber,
        apartmentBlock: apartmentBlock,
        vehicleModel: vehicleModel,
        vehicleColor: vehicleColor,
        parkingNumber: parkingNumber
    };

    console.log(reservation);
    alert('Cadastro realizado com sucesso!');
});